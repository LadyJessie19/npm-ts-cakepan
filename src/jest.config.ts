module.exports = {
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx"],
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
    "\\.[jt]sx?$": "babel-jest",
    // "\\.css$": "some-css-transformer",
    // '^.+\\.tsx?$': 'ts-jest',
  },
};
