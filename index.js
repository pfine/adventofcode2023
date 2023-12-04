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
	process.exit(0);
}

// validate 3rd: day00 folder
const dayFolder = argv[2];
console.log(` [DEV] dayFolder: ${dayFolder}`);
const isDayFolderExist = fs.existsSync(path.join(__dirname, dayFolder));
console.log(` [DEV] isDayFolderExist: ${isDayFolderExist}`);
if (!isDayFolderExist) {
	console.log(
		`\n[ERROR] It looks that folder: ${dayFolder} - DO NOT exist under path: ${__dirname}`
	);
	process.exit(1);
}

// validate 4th: name of input-file in day00 folder
const fileInput = argv[3];
console.log(` [DEV] dayInputFile: ${fileInput}`);
const isInputFileExist = fs.existsSync(
	path.join(__dirname, dayFolder, fileInput)
);
console.log(` [DEV] isInputFileExist: ${isInputFileExist}`);
if (!isInputFileExist) {
	console.log(
		`\n[ERROR] It looks that input file: ${fileInput} - DO NOT exist under path: ${__dirname}/${dayFolder}`
	);
	process.exit(1);
}

// calculate part:
