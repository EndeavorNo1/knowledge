```
var x = 1;
(function() {
    console.log(x);
    var x = 2;
})()
//-- undefined
```

> var let const
```
    const 常量，不可变
    let 同一作用域，重复声明抛错 暂时性死区
    var 不受块级作用域限制，声明提升
    
    let name = 42
    console.log(typeof name)//number
    
    var name = 42(跟window对象重合，取window对象类型)
    console.log(typeof name)//string
    
```
> js with()严格模式下不可用
```
let obj={name:'huahua',age:18}
//undefined
with(obj){console.log(name,age)}
// huahua 18
```
> 函数默认值也可以是函数，但前面的实参不可为undefined
```
const baga = (name,func=func()) => {
    //code
}
// 使用默认值就不用再加个if语句判断了
```
> 行参数量-arity
```
const bbq = (a,b) => {
    console.log(bbq.length)//2
}
```
> 类和类表达式
```
class 子 extends 父 {}
```
> 对象方法
```
//1. 除一下2个，其余与===一致
    Object.is(+0,-0)//false
    Object.is(NaN,NaN)//true
//2. 
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let arr = [["a",1],["b",2],["c",3]]
    Object.keys(obj)// ES5- ['a', 'b', 'c']
    Object.values(obj)// ES7- [1, 2, 3]
    Object.entries(obj)//  ES7-[["a",1],["b",2],["c",3]]
    Object.fromEntries(arr)// ES9-{a:1,b:2,c:3} 与entries相对，也可以将Map类型转为对象Map.prototype.entries返回的参数恰好是Object.fromEntries的参数
```
> 对象属性顺序
```
    // 对象的属性顺序，字符串根据，证书索引
    // 其他字符串类型的键，按照创建顺序
    // ES2020之后增加了属性顺序
    // 属性顺序当前性能还不稳定，不建议以来
```
> 对象简写方法
```
   // 旧的
   const obj={example:function(){//...}}
   // 新的
   const obj={example(){//...}}
```
> super 方法与原始对象建立链接
> 
