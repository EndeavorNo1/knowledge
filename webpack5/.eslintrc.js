module.exports = {
    //继承Eslint规则
    extends:["eslint:recommended"],
    env:{
        node:true,//启用node全局变量
        browser:true//启用浏览器全局变量
    },
    parserOptions:{
        ecmaVersion: 6,
        sourceType:"module"
    },
    rules:{
        "no-var":2 // 不能使用var定义变量
    }  
    
}