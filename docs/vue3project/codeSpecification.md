# 代码规范

### 使用EditorConfig
`EditorConfig`有助于为跨各种编辑器和IDE在同一项目上工作的多个开发人员维护一致的编码样式。`EditorConfig`项目由一个用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。`EditorConfig`文件易于阅读，并且与版本控制系统配合良好。

[editorconfig官网](https://editorconfig.org/)

::: warning 注意
VSCode 使用 EditorConfig 需要下载插件 EditorConfig for VS Code。
:::

在项目根目录下增加 .editorconfig 文件

```js'
root = true

# 匹配全部文件
[*]
indent_style = space                    # 输入的 tab 都用空格代替
indent_size = 2                         # 一个 tab 用 2 个空格代替
end_of_line = lf                        # 换行符使用 unix 的换行符 \n
charset = utf-8                         # 字符编码 utf-8
trim_trailing_whitespace = true         # 去掉每行末尾的空格
insert_final_newline = true             # 每个文件末尾都加一个空行

[*.md]
trim_trailing_whitespace = false        # .md 文件不去掉每行末尾的空格
```

#### EditorConfig配置说明
- `indent_style`：设置为制表符或空格分别使用硬制表符或软制表符。
- `indent_size`：定义用于每个缩进级别的列数和软制表符的宽度（如果支持）的整数。当设置为 tab 时，将使用 tab_width 的值（如果指定）。
- `tab_width`：定义用于表示制表符的列数的整数。这默认为 indent_size 的值，通常不需要指定。
- `end_of_line`：设置为 lf、cr 或 crlf 以控制如何表示换行符。
- `charset`：设置为latin1、utf-8、utf-8-bom、utf-16be或utf-16le来控制字符集。
- `trim_trailing_whitespace`：设置为 true 以删除换行符之前的任何空白字符，设置为 false 以确保它不会。
- `insert_final_newline`：设置为 true 以确保文件在保存时以换行符结尾，设置为 false 以确保它没有。
- `root`：特殊属性，应该在文件的任何部分之外的顶部指定。设置为 true 以停止对当前文件的 .editorconfig 文件搜索。


打开文件时，EditorConfig 插件会在打开的文件的目录和每个父目录中查找名为 .editorconfig 的文件。 如果到达根文件路径或找到具有 root=true 的 EditorConfig 文件，将停止对 .editorconfig 文件的搜索。EditorConfig 文件从上到下读取，最新发现的规则优先。 匹配 EditorConfig 部分的属性按它们被读取的顺序应用，因此更接近的文件中的属性优先。

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

生成.eslintrc.js文件如下。

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

3. 对进行配置修改
```js
module.exports = {
  // 指定环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  parser: 'vue-eslint-parser',
  // 配置扩展
  extends: [
    'plugin:vue/vue3-recommended', // 用于 Vue 3.x校验
    'plugin:@typescript-eslint/recommended',
    'prettier', // // 放最后解决与eslint的冲突
    'plugin:prettier/recommended', // 如果同时使用了 eslint-plugin-prettier 和 eslint-config-prettier 可以这么配置
    // 'airbnb-base' // 启用airbnb代码风格
  ],
  // 解析器参数
  parserOptions: {
    ecmaVersion: 6, // 使用的 ECMAScript 版本
    parser: '@typescript-eslint/parser', // 指定解析器
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 启用JSX
    },
  },
  // // 使用插件
  // plugins: [
  //   'vue', // 拓展使用vue校验规则
  //   '@typescript-eslint', // 拓展使用typescript-eslint校验规则
  //   'prettier'
  // ],
  // 自定义配置规则可以覆盖extends里面的规则
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 优先使用 interface 而不是 type
    '@typescript-eslint/no-explicit-any': 'off', // 不允许使用any类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法上的显式返回和参数类型
    'vue/no-multiple-template-root': 'off', // 不允许向模板添加多个根节点
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容前后需要换行符
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    'vue/attribute-hyphenation': 'off', // 在模板中的自定义组件上强制使用属性命名样式
    'no-duplicate-imports': 'off', // 禁止重复模块导入
    'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // 当空格用于对齐时，允许混合制表符和空格
    'new-cap': { capIsNew: false }, // 允许调用首字母大写的函数时没有 new 操作符
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // 不允许多个空行
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-shadow': 'error', // 禁止变量声明覆盖外层作用域的变量
    'no-alert': 'error', // 禁用 alert、confirm 和 prompt
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'spaced-comment': ['error', 'always'], // 强制在注释中 // 或 /* 使用一致的空格
    'arrow-spacing': 'error', // 要求箭头函数的箭头之前或之后有空格
    // 'indent': ['error', 2], // 2 个空格缩进
    // 'quotes': ['error', 'single'], // 要求尽可能地使用单引号
    // 'comma-dangle': ['error', 'never'], // 强制在对象和数组字面量中使用一致的拖尾逗号
    // 'semi': ['error', 'never'] // 要求行末或禁止使用分号
  },
  // 配置全局变量
  globals: {
    Nullable: true,
  },
  // 为特定类型的文件指定处理器，例如，下面对 *.md 文件使用处理器 a-plugin/markdown
  // overrides: [
  //   {
  //     'files': ['*.md'],
  //     'processor': 'a-plugin/markdown'
  //   }
  // ]
}
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

### 使用Prettier
Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格。

1. 安装
```sh
yarn add prettier -D
```

2. 在项目根目录新建`prettier.config.js`文件

```js
// prettier.config.js
module.exports = {
  printWidth: 100, // 单行代码超出 100 个字符自动换行
  tabWidth: 2, // 一个 tab 键缩进相当于 2 个空格
  useTabs: false, // 行缩进使用 tab 键代替空格
  semi: false, // 语句的末尾加上分号
  vueIndentScriptAndStyle: true, // 对于 .vue 文件，缩进 <script> 和 <style> 里的内容
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key仅仅当必须的时候才会加上双引号
  bracketSpacing: true, // 在括号和对象的文字之间加上一个空格
  trailingComma: 'none', // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
  jsxSingleQuote: true, // 在 JSX 中使用单引号
  arrowParens: 'avoid', // 当箭头函数中只有一个参数的时候可以忽略括弧
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  requirePragma: false, // 不需要写文件开头的 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'strict', // 所有标记周围的空白（或缺少空白）被认为是重要的
  endOfLine: 'lf', // 换行符使用 lf
}
```

3. 接下来安装 VSCode 中的 Prettier 插件，然后修改 `vscode/settings.json`

需要注意的是，由于 ESLint 也可以检查一些代码格式的问题，所以在和 Prettier 配合使用时，我们一般会把 ESLint 中的代码格式相关的规则禁用掉，否则就会有冲突了。
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

新建stylelint.config.js配置文件

```js
// stylelint.config.js
module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-pseudo-class-no-unknown': true, // 禁止使用未知的伪类选择器
    'selector-pseudo-element-no-unknown': true, // 禁止使用未知的伪元素
    'at-rule-name-space-after': 'always', // 要求在 at 规则之后有一个空格
    'block-no-empty': true, // 禁止出现空块
    // 禁止使用未知的 at 规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['screen', 'function', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

配置对象属性说明
- `rules`：
- `extends`：
- `plugins`：
- `ignoreFiles`：
### 使用Git Hook