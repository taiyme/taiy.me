// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
// @ts-expect-error 型定義ファイルなし
import nextPlugin from '@next/eslint-plugin-next';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import stylisticPlus from '@stylistic/eslint-plugin-plus';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import tsEslintParser from '@typescript-eslint/parser';
import flatGitignoreConfig from 'eslint-config-flat-gitignore';
// @ts-expect-error 型定義ファイルなし
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// @ts-expect-error 型定義ファイルなし
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error 型定義ファイルなし
import hooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
// @ts-expect-error 型定義ファイルなし
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/**
 * @typedef {import('eslint').Linter.Config} FlatConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 * @typedef {import('eslint').ESLint.Plugin} ESLintPlugin
 */

const getIgnoreFiles = () => /** @satisfies {FlatConfig[]} */([
  flatGitignoreConfig(),
  {
    ignores: [
      'patches/**',
      'public/**',
      'pnpm-lock.yaml',
    ],
  },
]);

const getRecommendedConfigs = () => /** @satisfies {FlatConfig[]} */([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
      '@stylistic/plus': stylisticPlus,
      '@typescript-eslint': /** @type {ESLintPlugin} */(tsEslint.plugin),
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      react: fixupPluginRules(/** @type {ESLintPlugin} */(reactPlugin)),
      'react-hooks': fixupPluginRules(/** @type {ESLintPlugin} */(hooksPlugin)),
      'jsx-a11y': fixupPluginRules(/** @type {ESLintPlugin} */(jsxA11yPlugin)),
      '@next/next': fixupPluginRules(/** @type {ESLintPlugin} */(nextPlugin)),
    },
  },
  ...[
    eslint.configs.recommended,
    .../** @type {FlatConfig[]} */(tsEslint.configs.recommended),
    stylisticJs.configs['disable-legacy'],
    stylisticTs.configs['disable-legacy'],
    stylisticJsx.configs['disable-legacy'],
  ].map((config) => ({
    ...config,
    files: ['**/*.{js,jsx,ts,tsx}'],
  })),
  .../** @type {FlatConfig[]} */(tailwindPlugin.configs['flat/recommended']),
  {
    settings: {
      tailwindcss: {
        callees: ['clsx'],
        config: 'tailwind.config.js',
      },
    },
  },
  {
    rules: {
      .../** @type {RulesRecord} */(reactPlugin.configs['jsx-runtime'].rules),
      .../** @type {RulesRecord} */(hooksPlugin.configs.recommended.rules),
      .../** @type {RulesRecord} */(jsxA11yPlugin.flatConfigs.recommended.rules),
      .../** @type {RulesRecord} */(nextPlugin.configs.recommended.rules),
      .../** @type {RulesRecord} */(nextPlugin.configs['core-web-vitals'].rules),
    },
  },
]);

export default /** @satisfies {FlatConfig[]} */([
  ...getIgnoreFiles(),
  ...getRecommendedConfigs(),
  {
    rules: {
      //#region JavaScript
      'no-new-wrappers': 'error',
      'no-restricted-globals': ['error', '__dirname', '__filename', 'event', 'name'],
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off', // unused-importsで対応
      'prefer-template': 'warn',
      'sort-imports': 'off',
      //#endregion JavaScript

      //#region TypeScript
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: true,
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-restricted-imports': ['error', {
        paths: [{
          name: 'next/link',
          message: 'Please use \'next-view-transitions\' instead.',
        }],
      }],
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // unused-importsで対応
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      //#endregion TypeScript

      //#region simple-import-sort
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      //#endregion simple-import-sort

      //#region unused-imports
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      }],
      //#endregion unused-imports

      //#region Next.js
      '@next/next/no-head-element': 'off',
      //#endregion Next.js

      //#region JavaScript (Stylistic)
      '@stylistic/js/array-bracket-newline': ['warn', 'consistent'],
      '@stylistic/js/array-bracket-spacing': ['warn', 'never'],
      '@stylistic/js/array-element-newline': 'off',
      '@stylistic/js/arrow-parens': ['warn', 'always'],
      '@stylistic/js/arrow-spacing': ['warn', {
        before: true,
        after: true,
      }],
      '@stylistic/js/comma-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/js/comma-style': ['error', 'last'],
      '@stylistic/js/computed-property-spacing': ['warn', 'never'],
      '@stylistic/js/dot-location': ['warn', 'property'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/js/function-paren-newline': ['warn', 'multiline'],
      '@stylistic/js/generator-star-spacing': ['warn', {
        before: true,
        after: true,
        named: 'after',
        anonymous: 'neither',
        method: 'both',
      }],
      '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/js/jsx-quotes': ['warn', 'prefer-single'],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/max-statements-per-line': ['warn', {
        max: 1,
      }],
      '@stylistic/js/new-parens': ['error', 'always'],
      '@stylistic/js/no-floating-decimal': 'error',
      '@stylistic/js/no-mixed-operators': 'error',
      '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/js/no-multi-spaces': 'warn',
      '@stylistic/js/no-tabs': 'error',
      '@stylistic/js/no-trailing-spaces': 'warn',
      '@stylistic/js/no-whitespace-before-property': 'warn',
      '@stylistic/js/nonblock-statement-body-position': ['error', 'beside'],
      '@stylistic/js/one-var-declaration-per-line': ['warn', 'always'],
      '@stylistic/js/operator-linebreak': ['warn', 'before', {
        overrides: {
          '=': 'none',
        },
      }],
      '@stylistic/js/rest-spread-spacing': ['warn', 'never'],
      '@stylistic/js/semi-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/js/semi-style': ['error', 'last'],
      '@stylistic/js/space-in-parens': ['warn', 'never'],
      '@stylistic/js/space-unary-ops': 'warn',
      '@stylistic/js/switch-colon-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/js/template-curly-spacing': ['warn', 'never'],
      '@stylistic/js/template-tag-spacing': ['error', 'never'],
      '@stylistic/js/wrap-iife': ['error', 'inside', {
        functionPrototypeMethods: true,
      }],
      '@stylistic/js/wrap-regex': 'warn',
      '@stylistic/js/yield-star-spacing': ['warn', {
        before: false,
        after: true,
      }],
      //#endregion JavaScript (Stylistic)

      //#region TypeScript (Stylistic)
      '@stylistic/ts/block-spacing': ['warn', 'always'],
      '@stylistic/ts/brace-style': ['error', '1tbs'],
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/function-call-spacing': ['error', 'never'],
      '@stylistic/ts/indent': ['warn', 2],
      '@stylistic/ts/key-spacing': ['warn', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }],
      '@stylistic/ts/keyword-spacing': ['warn', {
        before: true,
        after: true,
      }],
      '@stylistic/ts/lines-between-class-members': ['warn', {
        enforce: [{
          blankLine: 'always',
          prev: 'field',
          next: 'method',
        }, {
          blankLine: 'always',
          prev: 'method',
          next: 'field',
        }, {
          blankLine: 'always',
          prev: 'method',
          next: 'method',
        }],
      }],
      '@stylistic/ts/member-delimiter-style': ['warn', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        multilineDetection: 'brackets',
      }],
      '@stylistic/ts/no-extra-semi': 'error',
      '@stylistic/ts/object-curly-newline': ['warn', {
        multiline: true,
        consistent: true,
      }],
      '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
      '@stylistic/ts/object-property-newline': ['warn', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/ts/quote-props': ['warn', 'as-needed'],
      '@stylistic/ts/quotes': ['warn', 'single'],
      '@stylistic/ts/semi': ['error', 'always'],
      '@stylistic/ts/space-before-blocks': ['warn', 'always'],
      '@stylistic/ts/space-before-function-paren': ['warn', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/ts/space-infix-ops': 'warn',
      '@stylistic/ts/type-annotation-spacing': ['warn', {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      }],
      //#endregion TypeScript (Stylistic)

      //#region JSX (Stylistic)
      '@stylistic/jsx/jsx-child-element-spacing': 'warn',
      '@stylistic/jsx/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      '@stylistic/jsx/jsx-closing-tag-location': 'warn',
      '@stylistic/jsx/jsx-curly-brace-presence': ['warn', {
        props: 'never',
        children: 'ignore',
        propElementValues: 'always',
      }],
      '@stylistic/jsx/jsx-curly-newline': ['warn', {
        multiline: 'consistent',
        singleline: 'consistent',
      }],
      '@stylistic/jsx/jsx-curly-spacing': ['warn', {
        when: 'never',
        attributes: {
          allowMultiline: true,
        },
        children: true,
        spacing: {
          objectLiterals: 'never',
        },
      }],
      '@stylistic/jsx/jsx-equals-spacing': ['warn', 'never'],
      '@stylistic/jsx/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      '@stylistic/jsx/jsx-function-call-newline': ['warn', 'multiline'],
      '@stylistic/jsx/jsx-indent-props': ['warn', 2],
      '@stylistic/jsx/jsx-max-props-per-line': ['warn', {
        maximum: {
          single: 3,
          multi: 1,
        },
      }],
      '@stylistic/jsx/jsx-pascal-case': 'warn',
      '@stylistic/jsx/jsx-props-no-multi-spaces': 'warn',
      '@stylistic/jsx/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx/jsx-tag-spacing': ['warn', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      '@stylistic/jsx/jsx-wrap-multilines': ['warn', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        propertyValue: 'parens-new-line',
      }],
      //#endregion JSX (Stylistic)
    },
  },
]);
