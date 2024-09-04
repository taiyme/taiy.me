// @ts-check

import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error 型定義ファイルなし
import nextPlugin from '@next/eslint-plugin-next';
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
// @ts-expect-error 型定義ファイルなし
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import globals from 'globals';

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('eslint').ESLint.Plugin} Plugin
 * @typedef {import('eslint').Linter.RulesRecord} Rules
 */

const files = ['**/*.{js,ts,jsx,tsx}'];

/** @type {import('eslint').Linter.Config[]} */
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
      '@next/next': fixupPluginRules(/** @type {Plugin} */(nextPlugin)),
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
    .../** @type {Config[]} */(tailwindPlugin.configs['flat/recommended']),
  ].map((config) => ({
    ...config,
    files,
  })),
  {
    name: 'taiy.me/rules',
    rules: {
      .../** @type {Rules} */(nextPlugin.configs.recommended.rules),
      .../** @type {Rules} */(nextPlugin.configs['core-web-vitals'].rules),
      'no-restricted-globals': ['error', '__dirname', '__filename', 'event', 'name'],
      '@typescript-eslint/no-restricted-imports': ['error', {
        paths: [{
          name: 'next/link',
          message: 'Please use \'next-view-transitions\' instead.',
        }],
      }],
      '@next/next/no-head-element': 'off',
    },
    files,
  },
];
