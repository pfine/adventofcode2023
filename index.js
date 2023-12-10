const fs = require('fs');
const path = require('path');
const { argv } = require('node:process');

// console.log(' >>-> argv.length = ', argv.length);

// print process.argv
argv.forEach((val, index) => {
	console.log(` [DEV] argv[${index}]=${val}`);
});
console.log('');

// there must be exact 4 argv,
// - 1st: path2node,
// - 2nd: path2index.js,
// - 3rd: day00 folder,
// - 4th: name of input-file in day00 folder
if (argv.length !== 4) {
	console.log('');
	console.log('=======================');
	console.log('| Advent of Code 2024 |');
	console.log('=======================');
	console.log('');
	console.log('SYNTAX: ');
	console.log('# node start <XXday-folder> <input-file>');
	console.log('Example: ');
	console.log('# npm start 01day input_test.txt');
	process.exit(0);
}

// validate 3rd: day00 folder
const dayFolder = argv[2];
console.log(` [DEV] Name of the dayFolder: ${dayFolder}`);
const isDayFolderExist = fs.existsSync(path.join(__dirname, dayFolder));
console.log(` [DEV] Check isDayFolderExist: ${isDayFolderExist}`);
if (!isDayFolderExist) {
	console.log(
		`\n[ERROR] It looks that folder: ${dayFolder} - DO NOT exist under path: ${__dirname}`
	);
	process.exit(1);
}

// validate 4th: name of input-file in day00 folder
const fileInput = argv[3];
console.log(`\n [DEV] Name of the dayInputFile: ${fileInput}`);
const isInputFileExist = fs.existsSync(
	path.join(__dirname, dayFolder, fileInput)
);
console.log(` [DEV] Check isInputFileExist: ${isInputFileExist}`);
if (!isInputFileExist) {
	console.log(
		`\n[ERROR] It looks that input file: ${fileInput} - DO NOT exist under path: ${__dirname}/${dayFolder}`
	);
	process.exit(1);
}

// calculate part:
// console.log('\n here ;) ');
const taskPath = './' + dayFolder + '/task';
console.log(`\n [DEV]  taskPath: ${taskPath}`);
const executingTask = require(taskPath);
const taskInputFilePath = path.join(__dirname, dayFolder, fileInput);
console.log(` [DEV]  taskInputFilePath: ${taskInputFilePath}`);

const output = executingTask.calculateTask(taskInputFilePath);

console.log(`\n [DEV] FINAL output =`);
console.log(output);
