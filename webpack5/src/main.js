import count from "./js/count";
import sum from "./js/sum";
import {add} from './js/main'
import 'core-js'//包过大的话可以手动引入
//想要webpack打包资源必须引入该资源
import "./css/index.css";
import "./css/iconfont.css"
import "./less/index.less";
// import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl"
console.log(count(2,1))
console.log(sum(1,2,3,4,5,6))
console.log(add(1,2,3))
if(module.hot){
    //判断是否支持热模块替换
    module.hot.accept("./js/count")
}