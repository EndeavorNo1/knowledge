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
### 6.类型冲突
```
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```
### 7. 是否在范围内
```
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```
### 8. 部分-Partial<Type>
```
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```
  
### 9. 必须-Required<Type>
```
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
```
  
### 10. 对象-Record<Keys, Type>
```
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
```
  
### 11. input e节点 
- e: React.ChangeEvent<HTMLInputElement>

 
https://yayujs.com/handbook/Generics.html#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F-generic-constraints
