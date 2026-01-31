import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2025,
=======
      ecmaVersion: 2021,
>>>>>>> 06162fb3f2b1f684b2ecea8891768b4da898137d
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