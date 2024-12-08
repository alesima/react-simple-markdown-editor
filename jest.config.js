module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs|cjs)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.m?js$)"],
  testEnvironment: "jest-environment-jsdom",
};
