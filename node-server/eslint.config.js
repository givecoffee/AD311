import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  }
];