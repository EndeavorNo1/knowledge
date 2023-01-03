```
var x = 1;
(function() {
    console.log(x);
    var x = 2;
})()

```
-- undefined
> var let const
```
    const 常量，不可变
    let 同一作用域，重复声明抛错 暂时性死区
    var 不受块级作用域限制，声明提升
```
