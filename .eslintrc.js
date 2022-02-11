module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
    "plugin:storybook/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier",
    "testing-library"
  ],
  "rules": {
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
  "overrides": [
    {
      "files": ["*.test.ts", "*.test.tsx"],
      "rules": {
        "react/jsx-no-constructed-context-values": "off"
      }
    },
    {
      "files": ["*.stories.tsx"],
      "rules": {
        "react/jsx-props-no-spreading": "off"
      }
    }
  ]
};