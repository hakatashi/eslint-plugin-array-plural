/**
 * @fileoverview Force usage of plural nouns to name array variables
 * @author Koki Takahashi
 */

const inflected = require('inflected');
const {noCase} = require('no-case');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: 'Force usage of plural nouns to name array variables',
			category: 'Fill me in',
			recommended: false,
		},
		fixable: null, // or "code" or "whitespace"
		schema: [
			{
				type: 'object',
				properties: {
					bracket: {
						type: 'boolean',
					},
					allows: {
						type: 'array',
						items: {
							type: 'string',
						},
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],
	},

	create(context) {
		const arrayLikeMethods = ['map', 'split', 'keys', 'values', 'entries'];

		const [{bracket = true, allows = ['array', 'list']} = {}] = context.options;

		const isPlural = (name) => {
			const identifierWords = noCase(name).split(/\s+/);
			const lastWord = identifierWords[identifierWords.length - 1];

			const pluralized = inflected.pluralize(lastWord).toLowerCase();
			const singularized = inflected.singularize(lastWord).toLowerCase();

			return allows.indexOf(lastWord) !== -1 || singularized === pluralized || singularized !== lastWord.toLowerCase();
		};

		const isArrayLike = (node) => {
			// [...]
			if (node.type === 'ArrayExpression') {
				return true;
			}

			// array.map(...)
			if (
				node.type === 'CallExpression' &&
				node.callee.type === 'MemberExpression' &&
				node.callee.computed === false &&
				node.callee.property.type === 'Identifier' &&
				arrayLikeMethods.indexOf(node.callee.property.name) !== -1
			) {
				return true;
			}

			// new Array(...)
			if (
				node.type === 'NewExpression' &&
				node.callee.type === 'Identifier' &&
				node.callee.name === 'Array'
			) {
				return true;
			}

			// Array.from(...)
			if (
				node.type === 'CallExpression' &&
				node.callee.type === 'MemberExpression' &&
				node.callee.computed === false &&
				node.callee.object.type === 'Identifier' &&
				node.callee.object.name === 'Array' &&
				node.callee.property.type === 'Identifier' &&
				node.callee.property.name === 'from'
			) {
				return true;
			}

			return false;
		};

		return {
			VariableDeclarator: (node) => {
				if (
					node.id.type !== 'Identifier' ||
					node.init === null ||
					!isArrayLike(node.init)
				) {
					return;
				}

				if (!isPlural(node.id.name)) {
					context.report(node.id, 'Use plural nouns to name array variable');
				}
			},
			AssignmentExpression: (node) => {
				if (
					node.operator !== '=' ||
					node.left.type !== 'Identifier' ||
					!isArrayLike(node.right)
				) {
					return;
				}

				if (!isPlural(node.left.name)) {
					context.report(node.left, 'Use plural nouns to name array variable');
				}
			},
			MemberExpression: (node) => {
				if (
					!bracket ||
					node.computed === false ||
					node.object.type !== 'Identifier' ||
					node.property.type !== 'Literal' ||
					typeof node.property.value !== 'number'
				) {
					return;
				}

				if (!isPlural(node.object.name)) {
					context.report(node.object, 'Use plural nouns to name array variable');
				}
			},
		};
	},
};
