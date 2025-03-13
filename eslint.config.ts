import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error 型定義ファイルなし
import nextPlugin from '@next/eslint-plugin-next';
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import type { ESLint, Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';
// @ts-expect-error 型定義ファイルなし
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import globals from 'globals';

const files = ['**/*.{js,ts,jsx,tsx}'];

export default [
  gitignore(),
  {
    name: 'taiy.me/ignores',
    ignores: [
      'patches/**',
      'public/**',
      'pnpm-lock.yaml',
    ],
  },
  {
    name: 'taiy.me/setup',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
      },
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@next/next': fixupPluginRules(nextPlugin as ESLint.Plugin),
    },
    settings: {
      tailwindcss: {
        callees: ['clsx'],
        config: './tailwind.config.js',
      },
    },
    files,
  },
  ...[
    ...taiymeConfig.configs.typescript,
    ...taiymeConfig.configs.react,
    ...(tailwindPlugin.configs['flat/recommended'] as Linter.Config[]),
  ].map((config) => ({
    ...config,
    files,
  })),
  {
    name: 'taiy.me/rules',
    rules: {
      ...(nextPlugin.configs.recommended.rules as Linter.RulesRecord),
      ...(nextPlugin.configs['core-web-vitals'].rules as Linter.RulesRecord),
      'no-restricted-globals': ['error', '__dirname', '__filename', 'event', 'name'],
      '@typescript-eslint/no-restricted-imports': ['error', {
        paths: [{
          name: 'next/link',
          message: 'Please use \'next-view-transitions\' instead.',
        }, {
          name: 'punycode',
          message: 'Please use \'punycode/\' instead.',
        }],
      }],
      '@next/next/no-head-element': 'off',
    },
    files,
  },
] as const satisfies Linter.Config[];
