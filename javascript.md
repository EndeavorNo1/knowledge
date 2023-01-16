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
> 迭代器 
```
    //1 for of
    const a = ["a","b","c"]
    for( const v of a){console.log(v)}//1 2 3

```
> 解构
```
    // 数组解构
    const arr = [1,2]
    const [first,second] = arr
    console.log(first,second)//1,2
    // 默认值解构
    const obj = {f1:3,d2:2}
    const {ts3 = 3} = obj
    console.log(ts3) // 3
    //默认值计算
    const {f1,d2,ts3,c4 = f1*4} =obj
    console.log(c4) // 12
    // rest,必须在最后
    const obj1 = {a:1,b:2,c:3,d:4,e:5}
    const {a,...rest} = obj1
    console.log(a,rest)//1 {b: 2, c: 3, d: 4, e: 5}
    // 数组对象遍历
    const arr3=[
        {name:"one",value:"1"},
        {name:"two",value:"2"},
        {name:"three",value:"3"}
        ]
    for(const {name,value} of arr3 ){
        console.log(name,value)
    }//one 1 two 2 three 3
```
