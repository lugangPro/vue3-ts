const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')
module.exports = {
  publicPath: "./", //基本路径
  outputDir: "trunk", //输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  assetsDir: "static", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  pages: undefined, //以多页模式构建应用程序。
  runtimeCompiler: false, //是否使用包含运行时编译器的 Vue 构建版本
  parallel: require("os").cpus().length > 1, //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  transpileDependencies: [],
  productionSourceMap: false, //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: true, //配置自动启动浏览器
    disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
    // host: "locahost",
    public: require("os").networkInterfaces()[Object.keys(require("os").networkInterfaces())[0]][1].address+':8080',
    port: 8080,
    https: false,
    hotOnly: true, // 热更新
    proxy: {
      "/api": {
        target: "http://cloud.api.caixuetang.cn/index.php",
        ws: true,
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    },
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    requireModuleExtension: true,
    extract: true, // 是否使用css分离插件
    sourceMap: false // 开启 CSS source maps，一般不建议开启
  },
  pwa: {}, // 向 PWA 插件传递选项
  pluginOptions: {} // 第三方插件配置
};
