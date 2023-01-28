### 1.介绍
webpack是一个静态资源打包工具，它会以一个或多个文件作为打包入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。输出的文件就是编译好的文件（bundle），可在浏览器中运行。
### 2.模式
- 开发模式：编译,打包后生成dist文件
- 生产模式：编译+压缩JS代码
### 3.理论实践
[webpack](https://webpack.js.org/)
#### 一、提升开发体验
1. sourceMap-查找到编译前的位置----cheap-module-source-map(行映射)----source-map（行+列映射）,让开发或上线时代码报错能更加准确的现实错误提示。
#### 二、提升打包构建速度
2. HotModuleReplacement---提高打包构建速度,运行中增删改模块，不用替换或者加载整个模块的页面 vue-loader\react-hot-loader，让开发只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快
3. OneOf-资源文件一旦被某个loader文件处理了，就不会继续遍历，打包速度更快
4. include/exclude-只处理/排除某些文件
5. cache -对babel/eslint处理的结果进行缓存
6. thread 多进程处理eslint和babel任务，速度更快
#### 三、减少代码体积
7. treeShaking-减少代码体积,自动剔除多余代码，webpack自带
8. 减少babel体积代码@babel-transform-runtime:插件对babel进行处理，让辅助代码从中引入，而不是每个文件自动生成辅助代码，减少代码体积
9. 减少图片体积 image-minimizer-webpack-plugin(无损压缩-npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
/有损压缩-npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D)
#### 四、优化代码运行性能
10. code-split代码分割和import按需加载
11. preload-浏览器立即加载资源/prefetch-浏览器在空闲时才开始加载资源（都是只加载不执行，都有缓存，preload只能加载当前页面使用的，prefetch既能加载当前页面，又能加载下一个页面，缺点，兼容性差）
12. Network Cache 对输出资源文件进行更好命名
13. Core-js 专门用来做es6以上API的polyfill。解决新特性的兼容问题
14. PWA 离线可以继续运行
15. case-sensitive-paths-webpack-plugin
#### 五、如何封装plugin
插件基本条件：
- 1.要是一个类。
- 2.要有一个apply函数
- 3.要调用complier API来影响打包结果
