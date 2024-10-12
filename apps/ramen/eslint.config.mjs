const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

// module.exports = [
//   ...baseConfig,
//   ...nx.configs['flat/react'],
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
//     // Override or add rules here
//     rules: {},
//   },
// ];

export default {
  ...baseConfig,
  plugins: [nx],
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  rules: {},
};
