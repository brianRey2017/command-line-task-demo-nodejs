const { argv } = require("yargs");
const { generateDefaultPath } = require("./files");

const DEFAULT_ARGS = {
  base: 5,
  limit: 10,
  filename: "./data/DATA.txt",
};

const getArguments = () => {
  const {
    base = DEFAULT_ARGS.base,
    limit = DEFAULT_ARGS.limit,
    filename,
  } = argv;

  return {
    base,
    filename: filename || generateDefaultPath(base, limit),
    limit,
  };
};

module.exports = { getArguments };
