const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");
const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn"
    }
  }
];