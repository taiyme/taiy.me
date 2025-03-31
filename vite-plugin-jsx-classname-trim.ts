import generate_ from '@babel/generator';
import { parse } from '@babel/parser';
import traverse_ from '@babel/traverse';
import type { Plugin } from 'vite';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generate = ((generate_ as any).default ?? generate_) as typeof generate_;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const traverse = ((traverse_ as any).default ?? traverse_) as typeof traverse_;

export default function jsxClassnameTrim() {
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
            && (path.node.name.name === 'class' || path.node.name.name === 'className')
            && path.node.value?.type === 'JSXExpressionContainer'
            && path.node.value.expression.type === 'TemplateLiteral'
            && path.node.value.expression.quasis[0]?.type === 'TemplateElement'
            && path.node.value.expression.expressions.length === 0
          ) {
            const { cooked = '' } = path.node.value.expression.quasis[0].value;
            const cleanedClassName = cooked.split(/\s+/).filter((x) => x !== '').join(' ');

            path.node.value = {
              type: 'StringLiteral',
              value: cleanedClassName,
            };
          }
        },
      });

      const { code, map } = generate(ast);

      return { code, map };
    },
  } as const satisfies Plugin;
}
