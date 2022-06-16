import count from "./js/count";
import sum from "./js/sum";
//想要webpack打包资源必须引入该资源
import "./css/index.css";
import "./css/iconfont.css"
import "./less/index.less";
// import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl"
console.log(count(2,1))
console.log(sum(1,2,3,4,5,6))