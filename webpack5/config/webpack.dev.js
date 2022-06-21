const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const os = require('os');
const threads =os.cpus().length;//cpu核数
const TerserWebpackPlugin=require('terser-webpack-plugin')
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
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
    //entry:'./src/main.js',//单入口-相对路径
    entry:{
        app:'./src/main.js',
        main:'./src/mm.js'
    },//多入口
    //输出
    output:{
        //文件的输出路径
        //__dirname nodejs的变量，代表当前文件的文件夹目录
        // path:path.resolve(__dirname,"dist"),//绝对路径
        // 开发模式没有输出
        // 执行单个文件npx webpack serve --config ./config/webpack.dev.js 
        path:path.resolve(__dirname,"dist"),
        // 给打包输出的其他文件命名
        chunkFilename:"static/js/[name].chunk.js",
        // 图片、字体等通过type：asset处理资源命名方式
        assetModuleFilename:"static/images/[hash:5][ext][query]",
        filename:"static/[name].js",
        // filename:"static/js/main.js",//入口文件打包输出文件名
        clean:true,//打包前将path整个目录清空，再进行打包
    },
    //加载器
    module:{
        rules:[
          {
              //每个文件只能被其中一个loader配置处理
            oneOf:[
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
                    // generator: {
                    //     //输出图片名称
                    //     //[hash:5]只取5位
                    //     filename: 'static/images/[hash:5][ext][query]',
                    // }
                },
                {
                    test:/\.(ttf|woff2?|mp3|mp4|avi)$/,//字体标签
                    type:"asset/resource",
                    // generator: {
                    //     //输出图片名称
                    //     //[hash:5]只取5位
                    //     filename: 'static/media/[hash:5][ext][query]',
                    // }
                },
                {
                    test: /\.js$/,
                    // include:path.resolve(__dirname,'../src'),//只处理src下的文件
                    exclude: /node_modules/,//排除的文件
                    
                    use:[
                        {
                            loader: 'thread-loader',//开启多进程
                            options: {
                                works:threads//进程数量
                            }
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                
                                // presets: ['@babel/preset-env']
                                cacheDirectory:true,//开启缓存
                                cacheCompression:false,//关闭缓存压缩
                                plugins:["@babel/plugin-transform-runtime"]//减少代码体积
                            }
                        }
                    ]
                    
                }
               ]
          }
        ]
    },
    //插件
    plugins:[
        new ESLintPlugin({
            // 检测哪些文件
            context:path.resolve(__dirname,"../src"),
            exclude:"node_modules",
            cache:true,//开启缓存
            cacheLocation:path.resolve(__dirname,"../node_modules/.cache/eslintcache"),
            threads,
            
        }),
        new HtmlWebpackPlugin({
            // 模版：以public/index.html文件创建新的html文件
            // 新的html文件特点：1结构和原来一致2.自动引入打包和输出资源
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename:"static/css/[name].css",
            chunkFilename:"static/css/[name].chunk.css"
        }),
       
    ],
    optimization:{
        //压缩的操作
        minimizer:[
            // 压缩css
            new CssMinimizerPlugin(),
            // 压缩js
            new TerserWebpackPlugin({
                parallel:threads//开启多进程，和进程数量设置
            }),
            // 压缩图片-包下不下来
            // new ImageMinimizerPlugin({
            //     minimizer:{
            //         implementation:ImageMinimizerPlugin.imageminGenerate,
            //         options:{
            //             plugins:[
            //                 ['gifsicle',{interlaced:true}],
            //                 ['jpegtran',{progressive:true}],
            //                 ['optipng',{optimizationLevel:5}],
            //                 ['svgo',{
            //                     plugins:["preset-default","prefixIds",{
            //                         name:"sortAttrs",
            //                         params:{
            //                             xmlnsOrder:"alphabetical"
            //                         }
            //                     }]
            //                 }]
            //             ]
            //         }
            //     }
            // })
        ],
        //代码分割配置
        splitChunks:{
            chunks:"all"
        },
        runtimeChunk:{
            name:(entrypoint) => `runtime~${entrypoint.name}.js`,
        }
        // cacheGroups:{
        //     default:{
        //         minSize:0,
        //         minChunks:2,
        //         priority:-20,
        //         reuseExistingChunk:true,
        //     }
        // }

    },
    //开发服务器:不会输出资源，在内存中编译打包
    devServer:{
        host:"localhost",//启动服务器域名
        port:"2022",//启动服务器端口号
        open:true,//收否自动打开浏览器
        hot:true//HMR开启
    },
    //模式
    mode:"development",
    devtool:"cheap-module-source-map"
}