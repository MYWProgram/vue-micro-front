# Vue 微前端解决方案

[![Vue.js](https://img.shields.io/badge/-Vue.js-%232c3e50?style=for-the-badge&logo=Vue.js)](https://github.com/MYWProgram/vue-micro-front)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%23031d30?style=for-the-badge&logo=typescript)](https://github.com/MYWProgram/vue-micro-front)

学习预加载路由项目有感尝试自己搭建前端已知路由配置情况下的 Vue 微前端解决方案。

## SDK Version

[![Vue](https://img.shields.io/badge/Vue-2.x-green)](https://github.com/MYWProgram/vue-micro-front)
[![TypeScript](https://img.shields.io/badge/TypeScript-3.x.x-brightgreen)](https://github.com/MYWProgram/vue-micro-front)

## 目标

1. 子项目支持单独开发，单独部署；因此可以多人同时开发子项目再进行合并部署。
2. 单一的入口 HTML.
3. 支持 JS 和 TS.

## 技术使用及注意事项

1. Lerna

    `Lerna` 是一个用于管理具有多个包的 `JavaScript` 项目的工具，它采用 `monorepo`（单代码仓库）的管理方式。

    主要使用其可以管理多个项目的 package.json 文件以及可以共用 `devDependencies` 的特性。

    使用 `lerna link convert` 命令，将子项目中公共的依赖（例如`babel`、`eslint`等）放到根目录的 package.json 文件中；一方面保证版本的统一，另一方面减少存储空间以及依赖安装的速度。

2. vue-cli 3 library

    子项目使用 Vue 脚手架 `library` 模式进行打包，方便主项目引用。

    在 `library` 模式中，Vue 是外置的；也就是说包中不会有 Vue，即便在代码中进行导入。

3. 插入子项目 script 标签到主项目

    在主项目进行编译时，将子项目的入口文件以 `script` 标签的形式插入到主项目 `html` 中。

    子项目的 `script` 标签必须在主项目 app.js 文件之前，为了获取到所有的路由配置。为了减少项目压力，避免首次加载过久，因此主项目建议只做路由管理（也可以进行常规开发）。

4. Route、Vuex

    子项目路由统一注册到 `Vue.__share__.routes` 上，主项目获取后拼接路由并实例化。因此路由需要子项目先注册，主项目统一获取。

    Vuex 恰恰相反，因为主项目中存储的一定是所有项目都可以使用的公共数据，因此现在主项目入口文件中实例化然后挂载到 `Vue.__share__.store` 上，然后在子项目 App.vue 中获取到 `Vue.__share__.store` 并调用 `store.registerModule(‘app-x', store)` 进行子项目 `store` 注册。

5. 打包

    由于主项目要访问子项目的资源，所以需要在主项目中进行代理转发配置；

    本地开发时使用 `proxy` 配置，线上部署时可以通过 `ngnix` 转发或者打包后主项目子项目同一文件夹按照相对路径引用的方式。

6. 缓存问题

    子项目缓存严重，因此推荐服务端进行子项目入口文件添加协商缓存。

## 使用

### 依赖安装

```bash
npm run (or yarn) bootstrap
```

### 本地运行

```bash
# 端口: 10240
npm run (or yarn) serve
```

### 构建

```bash
npm run (or yarn) build
```

## 升级计划

1. 加入 Vue3.0 升级。
2. 异步路由配置。

## 参考

[用微前端的方式搭建类单页应用](https://tech.meituan.com/fe_tiny_spa.html)
