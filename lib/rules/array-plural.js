/**
 * @fileoverview Force usage of plural noun to name array variables
 * @author Koki Takahashi
 */

const noCase = require('no-case');
const inflected = require('inflected');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: 'Force usage of plural noun to name array variables',
			category: 'Fill me in',
			recommended: false,
		},
		fixable: null, // or "code" or "whitespace"
		schema: [
			// fill in your schema
		],
	},

	create(context) {
		const isPlural = (name) => {
			const identifierWords = noCase(name).split(/\s+/);
			const lastWord = identifierWords[identifierWords.length - 1];

			const pluralized = inflected.pluralize(lastWord).toLowerCase();
			const singularized = inflected.singularize(lastWord).toLowerCase();

			return ['array', 'list'].includes(lastWord) || singularized === pluralized || singularized !== lastWord.toLowerCase();
		};

		return {
			VariableDeclarator: (node) => {
				if (node.id.type !== 'Identifier' || node.init === null || node.init.type !== 'ArrayExpression') {
					return;
				}

				if (!isPlural(node.id.name)) {
					context.report(node.id, 'Use plural noun to name array variable');
				}
			},
			AssignmentExpression: (node) => {
				if (node.operator !== '=' || node.left.type !== 'Identifier' || node.right.type !== 'ArrayExpression') {
					return;
				}

				if (!isPlural(node.left.name)) {
					context.report(node.left, 'Use plural noun to name array variable');
				}
			},
		};
	},
};
