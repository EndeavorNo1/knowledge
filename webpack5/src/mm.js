import {add} from './js/main'
console.log(add(1,2,3))
if(module.hot){
    //判断是否支持热模块替换
    module.hot.accept("./js/count")
}