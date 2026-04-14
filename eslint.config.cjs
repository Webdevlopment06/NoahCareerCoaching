const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: require('@eslint/js').configs.recommended,
});

module.exports = compat.extends(
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime'
);
