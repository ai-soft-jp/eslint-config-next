// @ts-check
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig(
  {
    ignores: ['**/next-env.d.ts', '**/.next/**', '**/.open-next/**'],
  },
  importPlugin.flatConfigs.react,
  react.configs.flat.recommended,
  react.configs.flat.jsx,
  {
    rules: {
      'react/prop-types': 'off',
      'react/button-hash-type': ['error', { reset: false }],
    },
  },
  reactCompiler.configs.recommended,
  reactRefresh.configs.next(),
  reactHooks.configs.flat.recommended,
  nextPlugin.configs['core-web-vitals'],
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
);
