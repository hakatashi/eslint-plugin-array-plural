/**
 * @fileoverview Force usage of plural noun to name array variables
 * @author Koki Takahashi
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/array-plural');
const {RuleTester} = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('array-plural', rule, {

	valid: [

		// give me some code that won't trigger a warning
	],

	invalid: [
		{
			code: 'const number = [0, 1, 2];',
			errors: [{
				message: 'Fill me in.',
				type: 'Me too',
			}],
		},
	],
});
