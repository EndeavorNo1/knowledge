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
//1. 除以下2个，与===一致
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
> async await 并行写法
```
    const fetchJSON = async (url) => {
        const res = await fetch(url)
        return res.data
    }
    const data = await Promise.all([fetchJSON('a'),fetchJSON('b'),fetchJSON('c')])
```
> for await of
```
    for await ( const value of fetchInSeries("a_url","b_url","c_url")){
        console.log(value)
    }
```
> 字符串方法
```
    console.log("n".repeat(3))//nnn
    console.log("capite".startsWith("ca"))//true
    console.log("capite".endssWith("tea"))//false
    console.log("capite".includes("cap"))//true
    console.log("capite".padEnd(20,'-*'))//capite-*-*-*-*-*-*-*
    console.log("capite".padStart(20))//'              capite'
    console.log("  trim   ".trimStart())//'trim   '
    console.log("  trim   ".trimEnd())//'  trim'
```
> 微调
```
   const val = this.num ?? 300 //不是 null undefind，就取300
   //旧
   const x = some && some.deeply && some.deeply.nested && some.deeply.nested.value
   //ES2020-新
   const y = some?.deeply?.nested?.value
```
> globalThis
======
以上记录均来源于
![深入理解现代javascript](https://user-images.githubusercontent.com/31230553/212852518-7d6cb26f-be4f-4199-9ebe-dcd5505c103a.jpeg)

> push 和 concat的区别
```
今天写个对象数组加对象的需求，但我console的时候返回的是长度，记录下区别吧
concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
区别：
1，push()是在原数组的基础上修改的，执行push()方法后原数组的值也会变；concat()是先把原数组复制到一个新的数组，然后在新数组上进行操作，所以不会改变原数组的值。
2，如果参数不是数组，push()和concat()都会直接把参数添加到数组后；如果参数是一个数组，push()就会直接把数组添加到原数组后，而concat()会把数组里的值取出来添加到原数组的后面。

```

<img width="415" alt="截屏2023-02-23 下午5 54 55" src="https://user-images.githubusercontent.com/31230553/220874614-bbc337c5-a91b-47bf-a00d-2e359a51f589.png">


