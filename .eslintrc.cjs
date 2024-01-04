module.exports = {
  env: {
    //运行环境
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    //规则继承
    //全部规则默认是关闭的，这个配置开启推荐规则，推荐规则参照文档
    'eslint:recommended',
    //ts3语法规则
    'plugin:@typescript-eslint/recommended',
    //vue3语法规则
    'plugin:vue/vue3-essential',
    //prettier格式化规则，不加用不了配置的prettier
    'plugin:prettier/recommended',
  ],
  overrides: [
    //为特定的类型文件指定处理器
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    //parser指定解析器
    //Esprima 默认解析器
    //Babel-Eslint  babel解析器 把es6语法转化成es5
    //@typescript-eslint/parser ts解析器
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  //eslint支持第三方插件，使用前必须npm插件
  plugins: [
    '@typescript-eslint', //eslint-plugin-@typescript-eslint
    'vue', //eslint-plugin-vue
  ],
  // eslint规则
  rules: {
    // 'off' 或 0：关闭规则。
    //'warn' 或 1：将规则违规视为警告（不会导致程序退出）。
    //'error' 或 2：将规则违规视为错误（会导致程序退出）。
    // eslint (https://eslint.bootcss.com/docs/rules/)
    // eslint rules
    indent: ['error', 2],
    'no-var': 'error', //要求使用let或者const 而不是var
    'no-multiple-empty-lines': ['warn', { max: 1 }], //不允许有多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', //禁止多余的空行
    'no-useless-escape': 'off', //禁止不必要的转义字符

    // TypeScript rules(https://TypeScript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', //禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁上使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', //禁止使用any类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', //禁止使用自定义ts模块和命名空间
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue rules
    // 'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/multi-word-component-names': 'off', //要求组件名称始终为-连接
    'vue/script-setup-uses-vars': 'error', //防上<script setup>使用的变量<template>被标记为未使用

    // Vue rules
    'vue/no-mutating-props': 'off', //不允许组件prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
}
