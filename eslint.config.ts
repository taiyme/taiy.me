import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';
import betterTailwindcssPlugin from 'eslint-plugin-better-tailwindcss';

const files = ['**/*.{js,jsx,ts,tsx}'];

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
      },
    },
    rules: {
      ...betterTailwindcssPlugin.configs.recommended?.rules,
      'better-tailwindcss/multiline': ['warn', { printWidth: 120 }],
    },
  },
] as const satisfies Linter.Config[];
