module.exports = {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.jsx?$": "babel-jest",
      '\\.[jt]sx?$': 'babel-jest',
      '\\.css$': 'some-css-transformer',
    },
    verbose: true,
  };
  