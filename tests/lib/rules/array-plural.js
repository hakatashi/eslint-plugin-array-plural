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
		'var strings = ["foo", "bar", "baz"]',
		'var ids;\nids = [0, 1, 2];',
		'let ultimateNumbers = [6, 7, 42];',
		'const PREDEFINED_NUMBERS = [0, 1, 2];',
		'const {number} = {number: [0, 1, 2]};',
	],

	invalid: [
		{
			code: 'const number = [0, 1, 2];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'VariableDeclarator',
			}],
		},
		{
			code: 'const correctNumber = [0, 1, 2];',
			errors: [{
				message: 'Use plural noun to name array variable',
				type: 'VariableDeclarator',
			}],
		},
	],
});
