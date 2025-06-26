import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';
import betterTailwindcssPlugin from 'eslint-plugin-better-tailwindcss';
import { getDefaultCallees } from 'eslint-plugin-better-tailwindcss/api/defaults';
import { type CalleeMatchers, MatcherType } from 'eslint-plugin-better-tailwindcss/api/types';

const files = ['**/*.{js,jsx,ts,tsx}'];

const TV_BASE_VALUES = [
  'tv',
  [
    {
      match: MatcherType.ObjectValue,
      pathPattern: '^base.*$',
    },
  ],
] satisfies CalleeMatchers;

const TV_SLOT_VALUES = [
  'tv',
  [
    {
      match: MatcherType.ObjectValue,
      pathPattern: '^slots.*$',
    },
  ],
] satisfies CalleeMatchers;

export default [
  gitignore(),
  {
    name: 'taiy.me/typescript',
    files,
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...[
    ...taiymeConfig.configs.typescript,
    ...taiymeConfig.configs['react/stylistic'],
  ].map((config) => ({
    ...config,
    files,
  })),
  {
    name: 'taiy.me/tailwindcss',
    files,
    plugins: {
      'better-tailwindcss': betterTailwindcssPlugin,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/style.css',
        callees: [
          ...getDefaultCallees(),
          TV_BASE_VALUES,
          TV_SLOT_VALUES,
        ],
      },
    },
    rules: {
      ...betterTailwindcssPlugin.configs.recommended?.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 120 }],
    },
  },
] as const satisfies Linter.Config[];
