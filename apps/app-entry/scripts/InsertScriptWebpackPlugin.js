// ? 自制 webpack 插件，将子项目入口文件 main.js 转化为 script 标签插入主项目 html 中。
class InsertScriptWebpackPlugin {
  constructor(options = {}) {
    const { files = [] } = options;
    this.files = files;
  }
  apply(compiler) {
    const self = this;
    compiler.hooks.compilation.tap('InsertScriptWebpackPlugin', compilation => {
      if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
          'InsertScriptWebpackPlugin',
          htmlPluginData => {
            const {
              assets: { js }
            } = htmlPluginData;
            // * 将传入的 js 以 script 标签形式插入到 html 中。
            // ! 值得注意的是，子项目转化的 script 标签必须放在主项目入口文件 app.js 之前，为了方便主项目获取到所有路由。
            js.unshift(...self.files);
          }
        );
      } else {
        console.log('\n');
        console.log(
          '\x1b[41m%s\x1b[0m',
          'Error:',
          '`insert-script-webpack-plugin` dependent on `html-webpack-plugin`'
        );
      }
    });
  }
}

module.exports = InsertScriptWebpackPlugin;
