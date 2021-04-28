// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:import/errors",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jest", "unicorn"],
  rules: {
    "no-undef": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": [1],
    camelcase: 0,
    "no-param-reassign": 0,
  },
};
