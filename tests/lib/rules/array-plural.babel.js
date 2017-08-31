/**
 * @fileoverview Force usage of plural noun to name array variables
 * @author Koki Takahashi
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/array-plural');
const {RuleTester} = require('eslint');

RuleTester.setDefaultConfig({
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('array-plural', rule, {
	valid: [
		'var numbers = [0, 1, 2];',
		'var strings = ["foo", "bar", "baz"];',
		'var ids; ids = [0, 1, 2];',
		'let ultimateNumbers = [6, 7, 42];',
		'const PREDEFINED_NUMBERS = [0, 1, 2];',
		'const {number} = {number: [0, 1, 2]};',
		'window.number = [0, 1, 2];',
		'let splattedCharacters = [..."foo", ..."bar"]',
		'if (window.number[0] === 0) foo();',
		'if (number["hoge"] === 0) foo();',
		'if (number[foobar] === 0) foo();',
		'const crazyFish = ["black bass", "shark", "koi"];',
		'const uppercaseArguments = arguments.map(a => a.toUpperCase());',
		'const fiveHappyNumbers = new Array(5)',
		'const specialCharacters = Array.from("foobar")',
		'const subdividedNumbersArray = [[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]];',
		'const SUBDIVIDED_NUMBERS_ARRAY = [[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]];',
		'const groupedPeopleList = [["Anna", "Alice"], ["Bob", "Becky"], ["Cassie"]];',
		'const GROUPED_PEOPLE_LIST = [["Anna", "Alice"], ["Bob", "Becky"], ["Cassie"]];',
		{
			code: 'let someNumber = require("foobar"); someNumber[0];',
			options: [{bracket: false}],
		},
		{
			code: 'if (number[0] === 0) foo();',
			options: [{bracket: false}],
		},
		{
			code: 'const allowedNumberGroup = [10, 20, 30];',
			options: [{allow: ['group']}],
		},
		{
			code: 'const ALLOWED_NUMBER_GROUP = [10, 20, 30];',
			options: [{allow: ['group']}],
		},
	],

	invalid: [
		{
			code: 'const number = [0, 1, 2];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const correctNumber = [0, 1, 2];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const ULTIMATE_NUMBER = [0, 1, 2];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'let splattedCharacter = [..."foo", ..."bar"]',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'let coordinary; coordinary = [0, 0];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const uppercaseArgument = arguments.map(a => a.toUpperCase())',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const fiveHappyNumber = new Array(5)',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const specialCharacter = Array.from("foobar")',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'let someNumber = require("foobar"); someNumber[0];',
			options: [{bracket: true}],
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'let someNumber = require("foobar"); someNumber[0b01];',
			options: [{bracket: true}],
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'if (number[0] === 0) foo();',
			options: [{bracket: true}],
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const subdividedNumbersArray = [[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]];',
			options: [{allow: []}],
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
		{
			code: 'const groupedPeopleList = [["Anna", "Alice"], ["Bob", "Becky"], ["Cassie"]];',
			options: [{allow: []}],
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'Identifier',
			}],
		},
	],
});
