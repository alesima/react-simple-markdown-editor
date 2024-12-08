module.exports = {
  parser: "@typescript-eslint/parser", // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2021, // Modern JavaScript
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
  env: {
    browser: true, // Browser global variables like `window` and `document`
    es2021: true, // Enables ES2021 globals
    node: true, // Node.js global variables
    jest: true, // Jest global variables
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended", // Base ESLint recommended rules
    "plugin:react/recommended", // React-specific linting rules
    "plugin:react-hooks/recommended", // React Hooks-specific linting rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:jsx-a11y/recommended", // Accessibility checks
    "plugin:prettier/recommended", // Prettier integration
  ],
  rules: {
    "prettier/prettier": "error", // Make Prettier issues into lint errors
    "react/prop-types": "off", // Disable prop-types since you're using TypeScript
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ], // Ignore unused variables starting with _
    "react/react-in-jsx-scope": "off", // Not needed with React 17+ JSX runtime
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional for better readability
    "jsx-a11y/no-noninteractive-element-interactions": [
      "warn",
      {
        handlers: ["onClick"],
      },
    ], // Warn about accessible interactions
  },
};
