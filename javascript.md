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
