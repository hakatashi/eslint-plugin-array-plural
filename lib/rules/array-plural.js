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
		const isSingular = (word) => {
			const pluralized = inflected.pluralize(word).toLowerCase();
			const singularized = inflected.singularize(word).toLowerCase();

			return singularized === pluralized || pluralized !== word.toLowerCase();
		};

		return {
			VariableDeclarator: (node) => {
				if (node.id.type !== 'Identifier' || node.init === null || node.init.type !== 'ArrayExpression') {
					return;
				}

				const identifierWords = noCase(node.id.name).split(/\s+/);
				const lastWord = identifierWords[identifierWords.length - 1];


				if (isSingular(lastWord)) {
					context.report(node, 'Use plural noun to name array variable');
				}
			},
		};
	},
};
