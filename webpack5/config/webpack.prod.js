const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry:'./src/main.js',//相对路径
    //输出
    output:{
        //文件的输出路径
        //__dirname nodejs的变量，代表当前文件的文件夹目录
        path:path.resolve(__dirname,"../dist"),//绝对路径
        filename:"static/js/main.js",//入口文件打包输出文件名
        clean:true,//打包前将path整个目录清空，再进行打包
    },
    //加载器
    module:{
        rules:[
            //loader的配置
            {
                test:/\.css$/,//检测css文件
                use:[//执行顺序从右到左，从下到上
                    "style-loader",//将js中css通过创建style标签添加html文件中生效
                    "css-loader"//将css资源编译成commonjs的模块到js中
                ],
            },
            {
                test:/\.less$/,
                // loader:''//只能使用一个loader
                use:["style-loader","css-loader","less-loader"],//可以使用多个loader
            },
            {
                test:/\.s[ac]ss$/,
                // loader:''//只能使用一个loader
                use:["style-loader","css-loader","sass-loader"],//可以使用多个loader
            },
            {
                test:/\.styl$/,
                // loader:''//只能使用一个loader
                use:["style-loader","css-loader","stylus-loader"],//可以使用多个loader
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
            context:path.resolve(__dirname,"../src"),
            exclude:"node_modules"
        }),
        new HtmlWebpackPlugin({
            // 模版：以public/index.html文件创建新的html文件
            // 新的html文件特点：1结构和原来一致2.自动引入打包和输出资源
            template:path.resolve(__dirname,'../public/index.html')
        })
    ],
    //模式
    mode:"production",
    devtool:"source-map"
}