4.6版本  

日常使用ts记录
[ts](https://www.typescriptlang.org/docs/handbook/intro.html)  
### 1.enum
```
enum Color {Pink=1,Green=2,Blue=3}
let c:Color = Color.Pink
```
### 2.类型别名
```
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```
### 3.接口声明是命名对象类型的另一种方式
```
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```
### 4.类型定义和接口定义的区别
#### 4-1 扩展不同
```
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```
```
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
        
```
#### 4-1 添加字段interface可更改，type不可更改
```
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});//没太懂，记一下
```
```
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
```
### 5.bigint  & symbol
JavaScript 中有一个原语用于通过函数创建全局唯一引用Symbol()：
```
const oneHundred: bigint = BigInt(100);

const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}
```
