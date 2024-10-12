// const nx = require('@nx/eslint-plugin');
// const baseConfig = require('../../eslint.config.js');
// module.exports = [
//   ...baseConfig,
//   ...nx.configs['flat/react'],
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
//     // Override or add rules here
//     rules: {},
//   },
// ];

import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.js';

export default {
  ...baseConfig,
  plugins: [nx],
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  // Override or add rules here
  rules: {},
};
