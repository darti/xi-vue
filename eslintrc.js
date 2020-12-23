module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  rules: {},
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
}
