import { generate } from '@babel/generator';
import { parse } from '@babel/parser';
import traverse_ from '@babel/traverse';
import type { StringLiteral, TemplateElement } from '@babel/types';
import type { Plugin } from 'vite';

// @ts-expect-error -- @babel/traverse is a CommonJS package.
const traverse = (traverse_.default ?? traverse_) as typeof traverse_;

function trimClassName<T extends string | undefined>(
  str: T,
  opt?: {
    keepLeadingSpace?: boolean;
    keepTrailingSpace?: boolean;
  },
) {
  if (str == null || str === '') return str;

  let result = str.replace(/\s+/g, ' ');
  result = result.replace(/"/g, '&quot;');

  if (!opt?.keepLeadingSpace && result.startsWith(' ')) {
    result = result.trimStart();
  }

  if (!opt?.keepTrailingSpace && result.endsWith(' ')) {
    result = result.trimEnd();
  }

  return result;
}

function toStringLiteral<T extends TemplateElement | undefined>(node: T) {
  if (node == null) return null;

  const {
    type: _type,
    tail: _tail,
    value,
    ...rest
  } = node;

  if (value.cooked == null) return null;

  return {
    ...rest,
    type: 'StringLiteral',
    value: value.cooked,
  } satisfies StringLiteral as StringLiteral;
}

export default function jsxClassnameTrim() {
  const classNameAttributes = ['class', 'className'];

  return {
    name: 'vite-plugin-jsx-classname-trim',
    enforce: 'pre',
    transform(sourceCode, id) {
      if (!id.endsWith('.tsx') || id.includes('/node_modules/')) return;

      const ast = parse(sourceCode, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });

      traverse(ast, {
        JSXAttribute(path) {
          if (
            path.node.name.type === 'JSXIdentifier'
            && classNameAttributes.includes(path.node.name.name)
          ) {
            // className="..."
            if (path.node.value?.type === 'StringLiteral') {
              path.node.value = {
                ...path.node.value,
                value: trimClassName(path.node.value.value),
              } satisfies StringLiteral;
              return;
            }

            // className={...}
            if (path.node.value?.type === 'JSXExpressionContainer') {
              const { expression: exprItem } = path.node.value;

              // className={"..."}
              if (exprItem.type === 'StringLiteral') {
                path.node.value = {
                  ...exprItem,
                  value: trimClassName(exprItem.value),
                } satisfies StringLiteral;
                return;
              }

              // className={`...`}
              if (
                exprItem.type === 'TemplateLiteral'
                && exprItem.quasis.length === 1
              ) {
                const strItem = toStringLiteral(exprItem.quasis[0]);

                if (strItem?.type === 'StringLiteral') {
                  path.node.value = {
                    ...strItem,
                    value: trimClassName(strItem.value),
                  } satisfies StringLiteral;
                  return;
                }
              }

              // className={`${...}`}
              if (
                exprItem.type === 'TemplateLiteral'
                && exprItem.quasis.length > 1
              ) {
                exprItem.quasis = exprItem.quasis.map((quasiItem, index) => {
                  const trimOption = {
                    keepLeadingSpace: index !== 0,
                    keepTrailingSpace: !quasiItem.tail,
                  };

                  return {
                    ...quasiItem,
                    value: {
                      raw: trimClassName(quasiItem.value.raw, trimOption),
                      cooked: trimClassName(quasiItem.value.cooked, trimOption),
                    },
                  } satisfies TemplateElement;
                });
                return;
              }
            }
          }
        },
      });

      const { code, map } = generate(ast);

      return { code, map };
    },
  } as const satisfies Plugin;
}
