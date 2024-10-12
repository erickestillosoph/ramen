// const playwright = require('eslint-plugin-playwright');
// const baseConfig = require('../../eslint.config.js');

// module.exports = [
//   playwright.configs['flat/recommended'],

//   ...baseConfig,
//   {
//     files: ['**/*.ts', '**/*.js'],
//     // Override or add rules here
//     rules: {},
//   },
// ];

import playwright from 'eslint-plugin-playwright';
import baseConfig from '../../eslint.config.js';

export default {
  ...baseConfig,
  plugins: [playwright],
  files: ['**/*.ts', '**/*.js'],
  rules: {},
  // Add your specific ESLint configurations here
};
