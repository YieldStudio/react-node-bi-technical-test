/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
  ],
  plugins: ['unicorn'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    radix: 'off',
    'max-len': 'off',
    'no-bitwise': 'off',
    curly: ['error', 'all'],

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'continue', 'throw'] },
      {
        blankLine: 'always',
        prev: ['multiline-block-like', 'multiline-const', 'multiline-let', 'multiline-var', 'multiline-expression'],
        next: ['*'],
      },
      { blankLine: 'always', prev: ['import'], next: ['*'] },
      { blankLine: 'any', prev: ['import'], next: ['import'] },
      { blankLine: 'always', prev: ['export'], next: ['*'] },
      { blankLine: 'any', prev: ['export'], next: ['export'] },
      { blankLine: 'always', prev: ['directive'], next: ['*'] },
    ],

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],

    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [/^\[([A-Za-z]+)]\.(js|ts|tsx|jsx)$/],
      },
    ],
  },
};
