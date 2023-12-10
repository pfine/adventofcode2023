const fs = require('fs');
const path = require('path');
const { isNumberObject } = require('util/types');

const searchForNumber = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
];

exports.calculateTask = (inputFile) => {
	// Read from input file, and remove white-spaces from end of lines
	console.log(`\n [DEV]    calculateTask, inputFile = ${inputFile}`);
	const data = fs
		.readFileSync(inputFile, { encoding: 'utf-8', flag: 'r' })
		.trim();
	console.log(' [DEV]    calculateTask, data = ');
	console.log(data);
	console.log(` [DEV]    calculateTask, typeof data = ${typeof data}`);

	// Convert to array
	const convertToArray = data.split(/\r?\n/);
	console.log(' [DEV]    calculateTask, convertToArray = ');
	console.log(convertToArray);
	console.log(
		` [DEV]    calculateTask, typeof convertToArray = ${typeof convertToArray}`
	);

	// Find 1st/last number in string
	const firstOccurs = [];
	convertToArray.forEach((line) => {
		const currentLine = find1stNumberInCurrentLine(line);
		console.log(
			` [DEV]      calculateTask, first - currentLine = ${currentLine}`
		);
		firstOccurs.push(currentLine);
	});
	console.log(` [DEV]    calculateTask, firstOccurs = ${firstOccurs}`);

	const lastOccurs = [];
	convertToArray.forEach((line) => {
		const currentLine = findLastNumberInCurrentLine(line);
		console.log(
			` [DEV]      calculateTask, last - currentLine = ${currentLine}`
		);
		lastOccurs.push(currentLine);
	});
	console.log(` [DEV]    calculateTask, lastOccurs = ${lastOccurs}`);

	// concatenate 2 arrays
	const finalArray = concat2arrays(firstOccurs, lastOccurs);
	console.log(` [DEV]    calculateTask, finalArray = ${finalArray}`);

	const result = sumArrayElements(finalArray);
	console.log(` [DEV]    calculateTask, result = ${result}`);

	return result;
};

const find1stNumberInCurrentLine = (line) => {
	let min = 0;
	let min_nr = '';
	searchForNumber.forEach((el) => {
		const current = line.indexOf(el);
		// console.log(` >>--> el = ${el},  current = ${current}`);
		if (current !== -1) {
			// -1 - not exist in string
			if (min_nr !== '') {
				if (current < min) {
					min = current;
					min_nr = el;
				}
			} else {
				// first number find
				min = current;
				min_nr = el;
			}
		}
	});
	const result = changeToNumber(min_nr);
	return result;
};

const findLastNumberInCurrentLine = (line) => {
	let max = 0;
	let max_nr = '';
	searchForNumber.forEach((el) => {
		const current = line.lastIndexOf(el);
		// console.log(` >>--> el = ${el},  current = ${current}`);
		if (current !== -1) {
			// -1 - not exist in string
			if (max_nr !== '') {
				if (current > max) {
					max = current;
					max_nr = el;
				}
			} else {
				// first number find
				max = current;
				max_nr = el;
			}
		}
	});
	const result = changeToNumber(max_nr);
	return result;
};

const concat2arrays = (array1, array2) => {
	const result = [];
	if (array1.length === array2.length) {
		for (let index = 0; index < array1.length; index++) {
			result.push(`${array1[index]}${array2[index]}`);
		}
	}
	return result;
};

const changeToNumber = (nr) => {
	// console.log(` >>--> changeToNumber, nr = ${nr}`);
	// console.log(` >>--> changeToNumber, typeof nr = ${typeof nr}`);
	if (nr.length === 1) {
		return Number(nr);
	}
	switch (nr) {
		case 'one':
			return 1;
		case 'two':
			return 2;
		case 'three':
			return 3;
		case 'four':
			return 4;
		case 'five':
			return 5;
		case 'six':
			return 6;
		case 'seven':
			return 7;
		case 'eight':
			return 8;
		case 'nine':
			return 9;
		default:
			return NaN;
	}
};

const sumArrayElements = (array1) => {
	let sum = 0;
	array1.forEach((el) => {
		sum = sum + Number(el);
	});
	return sum;
};
