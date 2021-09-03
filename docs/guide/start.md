# 开始

## 环境准备
本地开发环境需要安装`Yarn`，`Node.js`和`Git`，建议使用`Node.js`的版本管理工具`nvm`。
::: warning 兼容性注意
Vite 需要 Node.js 版本 >= 12.0.0。
:::

### 安装nvm

### 使用nvm安装Node.js

### 安装Yarn

#### 设置npm和Yarn的淘宝镜像

### 安装Git

## 项目搭建

### 使用Vite初始化项目

1. 输入项目名称

![项目名称](/img/start_step1.png)

2. 选择技术框架vue

![选择vue](/img/start_step2.png)

3. 选择TypeScript作为开发语言

![选择TypeScript](/img/start_step3.png)

4. 项目创建成功

![创建成功](/img/start_step4.png)

5. 运行项目

```shell
  cd shvue3-project
  yarn
  yarn dev
```

初始化界面
![初始化界面](/img/start_step5.png)

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
![分支名称](/img/vue-devtools1.png)

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
![打包文件](/img/vue-devtools2.png)

5. 打开谷歌浏览器设置 -> 扩展应用程序 -> 加载已解压的扩展程序 -> 选择刚刚打包出来的文件`shell-chrome`
![打包文件](/img/vue-devtools3.png)
![打包文件](/img/vue-devtools4.png)

6. 这样适用于vue3的浏览器调试工具就安装好了，在vue3项目启动后就可以在控制台使用其提供的功能了
![打包文件](/img/vue-devtools5.png)
![打包文件](/img/vue-devtools6.png)

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

## 代码规范

### 使用EditorConfig

### 使用Prettier

### 使用ESLint

### 使用Git Hook