const fs = require("fs");
const { range } = require("./helpers");

const getFileHeaderLines = (base, limit) => [
  "====================================",
  `Multiplication table for ${base} up to ${limit}`,
  "====================================",
  "",
];

const generateDefaultPath = (base) => `data/TABLE_${base}.txt`;

const createFile = (filePath, data) =>
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      throw err;
    }

    console.log(`FILE SAVED IN "${filePath}"`);
  });

const generateMultiplicationTableLines = (base, limit) =>
  range(limit).map((i) => `${base} x ${i} = ${base * i}`);

const joinTextLines = (arr) => arr.join("\n");

module.exports = {
  createFile,
  generateDefaultPath,
  generateMultiplicationTableLines,
  getFileHeaderLines,
  joinTextLines,
};
