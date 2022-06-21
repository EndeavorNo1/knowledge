module.exports = {
    //智能预设
    presets:[
        ["@babel/preset-env",{
        useBuiltIns:'usage',//按需加载自动引入
        corejs:3
    }]],
}