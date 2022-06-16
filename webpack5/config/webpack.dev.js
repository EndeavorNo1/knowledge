const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
function getStyleLoader(pre){
    return [
    MiniCssExtractPlugin.loader,//将js中css通过创建style标签添加html文件中生效
    "css-loader",//将css资源编译成commonjs的模块到js中
    {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env",// 能解决绝大多数的样式兼容问题
                {
                  // Options
                },
              ],
            ],
          },
        },
    },
    pre,
].filter(Boolean)
}
module.exports = {
    //入口
    entry:'./src/main.js',//相对路径
    //输出
    output:{
        //文件的输出路径
        //__dirname nodejs的变量，代表当前文件的文件夹目录
        // path:path.resolve(__dirname,"dist"),//绝对路径
        // 开发模式没有输出
        // 执行单个文件npx webpack serve --config ./config/webpack.dev.js 
        path:undefined,
        filename:"static/js/main.js",//入口文件打包输出文件名
        clean:true,//打包前将path整个目录清空，再进行打包
    },
    //加载器
    module:{
        rules:[
            //loader的配置
            {
                test:/\.css$/,//检测css文件
                use:getStyleLoader()
            },
            {
                test:/\.less$/,
                // loader:''//只能使用一个loader
                use:getStyleLoader('less-loader')
            },
            {
                test:/\.s[ac]ss$/,
                // loader:''//只能使用一个loader
                use:getStyleLoader('sass-loader')
            },
            {
                test:/\.styl$/,
                // loader:''//只能使用一个loader
                use:getStyleLoader('stylus-loader')
            },
            {
                test:/\.(png|jpe?g|gif|webp|svg)$/,//图片优化
                type:"asset",
                parser:{
                    //小于50kb转base64
                    //优点：减少请求数量，缺点：增加体积
                    dataUrlCondition:{
                        maxSize:10*1024
                    }
                },
                generator: {
                    //输出图片名称
                    //[hash:5]只取5位
                    filename: 'static/images/[hash:5][ext][query]',
                }
            },
            {
                test:/\.(ttf|woff2?|mp3|mp4|avi)$/,//字体标签
                type:"asset/resource",
                generator: {
                    //输出图片名称
                    //[hash:5]只取5位
                    filename: 'static/media/[hash:5][ext][query]',
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,//排除的文件
                loader: 'babel-loader',
                // options: {
                // presets: ['@babel/preset-env']
                // }
            }
        ]
    },
    //插件
    plugins:[
        new ESLintPlugin({
            // 检测哪些文件
            context:path.resolve(__dirname,"../src")
        }),
        new HtmlWebpackPlugin({
            // 模版：以public/index.html文件创建新的html文件
            // 新的html文件特点：1结构和原来一致2.自动引入打包和输出资源
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename:"static/css/main.css"
        }),
        new CssMinimizerPlugin(),
    ],
    //开发服务器:不会输出资源，在内存中编译打包
    devServer:{
        host:"localhost",//启动服务器域名
        port:"2022",//启动服务器端口号
        open:true//收否自动打开浏览器
    },
    //模式
    mode:"development"
}