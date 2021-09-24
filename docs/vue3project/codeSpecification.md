# 代码规范

### 使用EditorConfig

### 使用Prettier

1. 安装
```sh
yarn add prettier -D
```

### 使用ESLint
1. 安装Eslint

```sh
yarn add eslint -D
```

2. 初始化一个配置文件

```sh
npx eslint --init
```
![初始化eslint](/img/vue3project/eslint1.png)

生成.eslintrc.js文件

```sh
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
```
[《Airbnb JavaScript Style Guide 中文版》](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)

[《eslint中文文档》](https://eslint.bootcss.com/)

[eslint-plugin-vue](https://eslint.vuejs.org/rules/)

[ESLint Plugin TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

[TypeScript代码检查](https://github.com/xcatliu/typescript-tutorial/blob/master/engineering/lint.md)

eslint-plugin-vue
eslint-plugin-vue 是对 .vue 文件进行代码校验的插件。
针对这个插件，它提供了这几个扩展

plugin:vue/base：基础
plugin:vue/essential：预防错误的（用于 Vue 2.x）
plugin:vue/recommended：推荐的，最小化任意选择和认知开销（用于 Vue 2.x）；
plugin:vue/strongly-recommended：强烈推荐，提高可读性（用于 Vue 2.x）；
plugin:vue/vue3-essential：（用于 Vue 3.x）
plugin:vue/vue3-strongly-recommended：（用于 Vue 3.x）
plugin:vue/vue3-recommended：（用于 Vue 3.x）


Prettier 和 ESLint 一起干活更配哦

### 使用StyleLint
[StyleLint中文教程](https://cloud.tencent.com/developer/doc/1267)

```sh
yarn add stylelint -D
```
```sh
yarn add stylelint-order -D
```
```sh
yarn add stylelint-config-standard -D
```
```sh
yarn add stylelint-config-prettier -D
```
### 使用Git Hook