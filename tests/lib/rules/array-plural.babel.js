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
		'const crazyFish = ["black bass", "shark", "koi"];',
		'const uppercaseArguments = arguments.map(a => a.toUpperCase());',
		'const fiveHappyNumbers = new Array(5)',
		'const specialCharacters = Array.from("foobar")',
	],

	invalid: [{
		code: 'const number = [0, 1, 2];',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}, {
		code: 'const correctNumber = [0, 1, 2];',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}, {
		code: 'const ULTIMATE_NUMBER = [0, 1, 2];',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}, {
		code: 'let coordinary; coordinary = [0, 0];',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'AssignmentExpression',
		}],
	}, {
		code: 'const uppercaseArgument = arguments.map(a => a.toUpperCase())',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}, {
		code: 'const fiveHappyNumber = new Array(5)',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}, {
		code: 'const specialCharacter = Array.from("foobar")',
		errors: [{
			message: 'Use plural noun to name array variable',
			type: 'VariableDeclarator',
		}],
	}],
});
