### 1.介绍
webpack是一个静态资源打包工具，它会以一个或多个文件作为打包入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。输出的文件就是编译好的文件（bundle），可在浏览器中运行。
### 2.模式
- 开发模式：编译,打包后生成dist文件
- 生产模式：编译+压缩JS代码
### 3.理论实践
[webpack](https://webpack.js.org/)

1. sourceMap-查找到编译前的位置----cheap-module-source-map(行映射)----source-map（行+列映射）
2. HotModuleReplacement---提高打包构建速度,运行中增删改模块，不用替换或者加载整个模块的页面 vue-loader\react-hot-loader
3. OneOf-每个文件只能被其中一个loader配置处理
