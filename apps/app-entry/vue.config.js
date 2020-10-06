const webpack = require('webpack');
const InsertScriptPlugin = require('./scripts/InsertScriptWebpackPlugin');
const APP_NAME = require('./package.json').name;
const PORT = require('./package.json').devPort;
// * 主项目需要访问子项目的资源，需要进行代理转发。
const PROXY = {
  '/app-first/': {
    target: 'http://localhost:10242/'
  },
  '/app-second/': {
    target: 'http://localhost:10241/'
  }
};
// * 子项目入口文件地址配置。
const modules = [
  './app-first/main.js',
  './app-second/main.js'
];

const NODE_ENV = process.env.NODE_ENV || 'development';

log('APP_NAME: ', APP_NAME);
log('NODE_ENV: ', NODE_ENV);

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_NAME': JSON.stringify(APP_NAME)
      }),
      new InsertScriptPlugin({ files: modules })
    ]
  },
  devServer: {
    port: PORT,
    proxy: PROXY
  }
};
// ? 终端输出工具函数。
function log(label, content, options) {
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', label, content);
}
