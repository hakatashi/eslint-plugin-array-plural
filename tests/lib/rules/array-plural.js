/**
 * @fileoverview Force usage of plural noun to name array variables
 * @author Koki Takahashi
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/array-plural'),

	RuleTester = require('eslint').RuleTester;


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
