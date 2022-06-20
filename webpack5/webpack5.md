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
4. include/exclude-只处理/排除某些文件
5. babel/eslint-缓存
6. treeShaking-减少代码体积,webpack自带
7. 减少babel体积代码@babel-transform-runtime:禁用了Babel自动对每个文件的runtime注入，而是引入。并且使室友的辅助代码从这里引入
8. 减少图片体积 image-minimizer-webpack-plugin(无损压缩-npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
/有损压缩-npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D)
9. 优化代码性能之代码分割和按需加载
