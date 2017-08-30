# eslint-plugin-array-plural

[![Greenkeeper badge](https://badges.greenkeeper.io/hakatashi/eslint-plugin-array-plural.svg)](https://greenkeeper.io/)

ESLint plugin to force usage of plural noun to name array variables

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-array-plural`:

```
$ npm install eslint-plugin-array-plural --save-dev
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
        "array-plural/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





