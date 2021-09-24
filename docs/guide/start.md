# 开始

## 环境准备
本地开发环境需要安装`Yarn`，`Node.js`和`Git`，建议使用`Node.js`的版本管理工具`nvm`。
::: warning 兼容性注意
Vite 需要 Node.js 版本 >= 12.0.0。
:::

### 安装nvm

> nvm是Node Version Manager的缩写（注意不是Virtual Machine）。从名字看出，nvm就是一个版本管理器。它提供了一个命令行接口让我们可以用一个命令安装不同版本的Node，让我们可以设置默认环境，并在不同环境中切换。

1. 打开[下载地址](https://github.com/coreybutler/nvm-windows/releases)，下载对应安装包。

![下载安装包](/img/vue3project/nvm-1.png)

2. 双击安装文件 nvm-setup.exe，同意协议点击下一步

![双击安装文件](/img/vue3project/nvm-2.png)

3. 选择nvm安装路径

![选择nvm安装路径](/img/vue3project/nvm-3.png)

4. 选择nodejs路径

![选择nodejs路径](/img/vue3project/nvm-4.png)

5. 点击安装按钮进行安装

![安装](/img/vue3project/nvm-5.png)

6. 安装完毕打开控制台，输入`nvm`，安装成功则如下显示。

![安装成功](/img/vue3project/nvm-8.png)

#### 解决nvm安装node和npm太慢

> nvm默认node镜像源是**https://nodejs.org/dist**，从默认的镜像缘源下载会很慢，所以可以通过更换镜像源加快下载

1. 找到之前安装nvm的文件夹目录，打开**settings.txt**文件

![打开settings.txt](/img/vue3project/nvm-6.png)

2. 新增两行配置，更换node和npm的下载源为淘宝镜像源

```sh
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

![新增配置](/img/vue3project/nvm-7.png)

### 使用nvm安装Node.js

1. 终端输入`nvm ls`查看已安装的`node.js`版本。`*`选择的为当前使用的版本。

```sh
nvm ls
```

![使用nvm安装Node.js](/img/vue3project/nvm-9.png)

2. 使用`nvm`安装指定版本`node.js`

```sh
nvm install 14.17.6
```

如下图所示说明安装指定版本的node.js和npm成功

![使用nvm安装Node.js](/img/vue3project/nvm-10.png)

在nvm的文件夹目录新增了指定版本的文件夹

![使用nvm安装Node.js](/img/vue3project/nvm-11.png)

文件夹里有已经安装好的node、npm和npx的包

![使用nvm安装Node.js](/img/vue3project/nvm-12.png)

3. 使用指定版本`node.js`，查看node和npm版本。

```sh
nvm use 14.17.6
```

![使用nvm安装Node.js](/img/vue3project/nvm-13.png)

4. 卸载指定版本`node.js`

```sh
nvm uninstall 14.17.6
```

#### 命令提示说明
- `nvm arch [32|64]`：显示node是运行在32位还是64位。
- `nvm current`： 显示活动版本。
- `nvm install <version> [arch]`：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过- 远程服务器的SSL。
- `nvm list [available]`：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
- `nvm on`：开启node.js版本管理。
- `nvm off`：关闭node.js版本管理。
- `nvm proxy [url]`：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
- `nvm uninstall <version>`：卸载指定版本node。
- `nvm use [version] [arch]`：使用制定版本node。可指定32/64位。
- `nvm root [path]`：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
- `nvm version`：显示nvm版本。version可简化为v。
- `nvm node_mirror [node_mirror_url]`：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
- `nvm npm_mirror [npm_mirror_url]`：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。

### 安装yarn

1. 使用已经安装好的`npm`来安装`yarn`

```sh
npm install yarn -g
```

2. 查看yarn版本

```sh
yarn -v
```

![安装Yarn](/img/vue3project/nvm-14.png)

3. 使用`nvm`进行`node版本`管理后，在每个`node版本`下都需要安装`yarn`，安装后指定版本文件夹会新增`yarn包`文件

![安装Yarn](/img/vue3project/nvm-15.png)

#### 设置npm和yarn的淘宝镜像

> 淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)大幅提升包的下载速度，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

1. 设置`npm`淘宝镜像

```sh
npm config set registry http://registry.npm.taobao.org/
```

2. 设置`yarn`淘宝镜像

```sh
yarn config set registry http://registry.npm.taobao.org/
```

3. 查询当前配置的镜像

```sh
npm get registry
yarn config get registry
```
### 安装Git

## 项目搭建

### 使用Vite初始化项目

1. 输入项目名称

![项目名称](/img/vue3project/start_step1.png)

2. 选择技术框架vue

![选择vue](/img/vue3project/start_step2.png)

3. 选择TypeScript作为开发语言

![选择TypeScript](/img/vue3project/start_step3.png)

4. 项目创建成功

![创建成功](/img/vue3project/start_step4.png)

5. 运行项目

```shell
  cd shvue3-project
  yarn
  yarn dev
```

初始化界面
![初始化界面](/img/vue3project/start_step5.png)

### 修改Vite配置文件

### 使用vue-devtools

1. 克隆代码到本地[GitHub地址](https://github.com/vuejs/devtools)
```sh
  git clone https://github.com/vuejs/devtools.git
```
::: tip
`vue3`项目使用`vue-devtools`需要使用`v6.0`以上的`beta版本`，`v6.0`以下的版本为`vue2`使用。
:::

2. 切换分支到`v6.0.0-beta.7`
![分支名称](/img/vue3project/vue-devtools1.png)

::: tip
自测在`main分支`或者高版本的v6分支上进行`build打包`会报错，建议在`v6.0.0-beta.7`上使用`yarn`进行打包操作。
:::

3. 安装依赖

```sh
yarn install
```

4. 执行打包命令

```sh
yarn build
```
打包出来的文件会在`packages`目录下，`shell-chrome`文件夹是给`chrome浏览器`使用的安装包
![打包文件](/img/vue3project/vue-devtools2.png)

5. 打开谷歌浏览器设置 -> 扩展应用程序 -> 加载已解压的扩展程序 -> 选择刚刚打包出来的文件`shell-chrome`
![打包文件](/img/vue3project/vue-devtools3.png)
![打包文件](/img/vue3project/vue-devtools4.png)

6. 这样适用于vue3的浏览器调试工具就安装好了，在vue3项目启动后就可以在控制台使用其提供的功能了
![打包文件](/img/vue3project/vue-devtools5.png)
![打包文件](/img/vue3project/vue-devtools6.png)

### 规范目录结构

### 使用Vue Router
1. 安装
```sh
yarn add vue-router@4 --save
```

### 使用Vuex
1. 安装
```sh
yarn add vuex@next --save
```
### 使用Axios

### 使用Ant-Design-Vue
1. 安装
```sh
yarn add ant-design-vue@next
```
### 使用Scss
```sh
yarn add sass -D
```
## 代码规范

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