# eslint-plugin-array-plural

[![Build Status](https://travis-ci.org/hakatashi/eslint-plugin-array-plural.svg?branch=master)](https://travis-ci.org/hakatashi/eslint-plugin-array-plural)
[![Greenkeeper badge](https://badges.greenkeeper.io/hakatashi/eslint-plugin-array-plural.svg)](https://greenkeeper.io/)

ESLint plugin to force usage of plural nouns to name array variables.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
yarn add eslint --dev
```

Next, install `eslint-plugin-array-plural`:

```sh
npm i eslint-plugin-array-plural --save-dev
yarn add eslint-plugin-array-plural --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-array-plural` globally.

## Usage

Add `array-plural` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "array-plural"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "array-plural/array-plural": 2
    }
}
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
const number = [0, 1, 2];

const correctNumber = [0, 1, 2];

const ULTIMATE_NUMBER = [0, 1, 2];

let coordinary;
coordinary = [0, 0];

const uppercaseArgument = arguments.map(a => a.toUpperCase());

const fiveHappyNumber = new Array(5);

const specialCharacter = Array.from("foobar");
```

Examples of **correct** code for this rule:

```js
var numbers = [0, 1, 2];
var strings = ["foo", "bar", "baz"];

var ids;
ids = [0, 1, 2];

let ultimateNumbers = [6, 7, 42];
const PREDEFINED_NUMBERS = [0, 1, 2];
const {number} = {number: [0, 1, 2]};
const crazyFish = ["black bass", "shark", "koi"];

// By default, 'array' and 'list' is whitelisted and allowsed for name of the arrays.
const subdividedNumbersArray = [[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]];
```

## Options

* `bracket` (boolean: Default = `true`) Detect variable with bracket access as array and force usage of plural nouns.
* `allows` (array of strings: Default = `["array", "list"]`) Whitelist name which can be used to name array variables.

### bracket

Examples of **incorrect** code for this rule with the default `{ "bracket": true }` option:

```
number[0];
predefinedNumber[1];
```

Examples of **correct** code for this rule with the default `{ "bracket": true }` option:

```
numbers[0];
object.number[0];
predefinedNumber['foo'];
```

Examples of **correct** code for this rule with the `{ "bracket": false }` option:

```
number[0];
predefinedNumber[1];
```

### allows

Examples of **incorrect** code for this rule with the default `{ "allows": ["array", "list"] }` option:

```
const number = [0, 1, 2];
const numberarray = [0, 1, 2];
```

Examples of **correct** code for this rule with the default `{ "allows": ["array", "list"] }` option:

```
const numberArray = [0, 1, 2];
const NUMBER_ARRAY = [0, 1, 2];
const numberList = [0, 1, 2];
const NUMBER_LIST = [0, 1, 2];
```

Examples of **correct** code for this rule with the `{ "allows": ["group"] }` option:

```
const numberGroup = [0, 1, 2];
const NUMBER_GROUP = [0, 1, 2];
```
