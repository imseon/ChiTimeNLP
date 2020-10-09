const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    env: {
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
    },
    extends: [
        'cmyr'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: new Date().getFullYear(),
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    rules: {
        'no-prototype-builtins': 0,
        'no-console': 0
    },
}
