const {
  createFile,
  generateMultiplicationTableLines,
  getFileHeaderLines,
  joinTextLines,
} = require("./utils/files");

const { getArguments } = require("./utils/args");

const saveMultiplicationTableToFile = async () => {
  const { base, filename, limit } = getArguments();

  const headers = getFileHeaderLines(base, limit);
  const multiplicationTable = generateMultiplicationTableLines(base, limit);
  const output = joinTextLines([...headers, ...multiplicationTable]);

  await createFile(filename, output);
};

(async () => await saveMultiplicationTableToFile(3, 10))();
