# eslint-plugin-array-plural

[![Greenkeeper badge](https://badges.greenkeeper.io/hakatashi/eslint-plugin-array-plural.svg)](https://greenkeeper.io/)

ESLint plugin to force usage of plural noun to name array variables

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
```

## Options

None yet.
