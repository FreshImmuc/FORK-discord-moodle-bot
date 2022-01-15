/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript/base"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "tsconfig.json",
        "sourceType": "module",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "@typescript-eslint/no-unsafe-assignment": ["warn"],
        "@typescript-eslint/no-unsafe-member-access": ["warn"],
        "eol-last": ["error", "always"],
    }
};
