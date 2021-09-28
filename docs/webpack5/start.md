# 介绍

## 技术栈选型

- [Vue2.0](https://cn.vuejs.org/index.html)
- [webpack5](https://webpack.docschina.org/)
- [TypeScript](https://www.tslang.cn/docs/home.html)
- [Element-UI](https://element.eleme.cn/#/zh-CN)
- [Sass](https://www.sass.hk/)


## 代码校验
- [ESlint](https://eslint.bootcss.com/)
- [prettier](https://prettier.io/)
- [stylelint]()


## 初始化项目

1. 新建文件夹webpack5

```sh
npm init
```

一路回车生成package.json文件
![下载安装包](/img/webpack5/webpack5-1.png)

2. 安装webpack5和webpack cli

```sh
npm install webpack webpack-cli --save-dev
```

3. 在项目根目录新建源代码目录src，index.html文件

4. 在项目根目录新建webpack配置文件webpack.config.js

5. 添加配置

![下载安装包](/img/webpack5/webpack5-2.png)

6. 新增package.json文件的scripts脚本命令

```json
"scripts": {
  "build": "webpack"
}
```

7. build scripts执行脚本打包成功生成dist文件和main.js文件

![下载安装包](/img/webpack5/webpack5-4.png)

8. 使用HtmlWebpackPlugin

```sh
npm install --save-dev html-webpack-plugin
```


9. 使用babel-loader 
[下载安装包](https://juejin.cn/post/6844904008679686152#heading-0)

```sh
npm install -D babel-loader @babel/core @babel/preset-env
npm install --save @babel/polyfill
npm install --save core-js@3
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
npm install @babel/runtime-corejs3 --save
```

添加.browserslistrc文件，没有了箭头函数和const
```md
> 1%
last 2 versions
not ie <= 8
```

添加配置

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
```
![下载安装包](/img/webpack5/webpack5-5.png)
![下载安装包](/img/webpack5/webpack5-6.png)


10. 使用TypeScript

安装TypeScript

```sh
npm install -D typescript
```

生成tsconfig.json
```sh
tsc --init
```

打包错误
![下载安装包](/img/webpack5/webpack5-7.png)

安装
```sh
npm install ts-loader --save-dev
```

新增ts-loader后打包成功

![下载安装包](/img/webpack5/webpack5-8.png)


### 集成vue2框架

安装vue
```sh
npm install vue --save-dev
```

安装vue-loader，解析vue单文件

```sh
npm install vue-loader -D
npm install vue-template-compiler -D
```

添加VueLoaderPlugin


添加vue.d.ts文件，否则import引入vue文件会报错

```ts
/**
 * ts识别vue文件
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
```


安装vue-class-component和vue-property-decorator
```sh
npm install --save vue-class-component
npm install --save vue-property-decorator
```

TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.

设置tsconfig.js的experimentalDecorators为true


[vue-class-component文档](https://class-component.vuejs.org/)


#### 启用webpack热更新

```sh
npm install -D webpack-dev-server
```


### loader

- url-loader
```sh
npm install url-loader --save-dev
```
- file-loader
```sh
npm install file-loader --save-dev
```
- vue-style-loader
``sh
npm install vue-style-loader --save-dev
```
- css-loader
``sh
npm install css-loader --save-dev

```
- postcss-loader
``sh
npm install postcss-loader --save-dev

```
- sass-loader
``sh
npm install --save-dev sass
npm install sass-loader --save-dev
yarn add node-sass -D
npm install --save-dev style-loader
```
- less-loader
``sh

```
- stylus-loader
``sh

```
- cache-loader
``sh

```
- babel-loader
``sh

```
- ts-loader
``sh

```

### plugins

- VueLoaderPlugin
``sh

```
- DefinePlugin
``sh

```
- ProgressPlugin
``sh

```
- HtmlWebpackPlugin
``sh

```
- CopyWebpackPlugin
``sh

```
- HtmlPwaPlugin
``sh

```

安装cross-env修改环境变量

```sh
npm install --save-dev cross-env
```

#### 生产环境下的 CSS 进行压缩

```sh
npm install --save-dev mini-css-extract-plugin
```
建议 mini-css-extract-plugin 与 css-loader 一起使用。

#### 优化压缩css

```sh
npm install css-minimizer-webpack-plugin --save-dev
```
ERROR in main.css
main.css from Css Minimizer
Error: PostCSS plugin postcss-discard-comments requires PostCSS 8.

```sh
npm install postcss --save-dev
```