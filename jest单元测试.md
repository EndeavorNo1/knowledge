####一、文档
[官网](https://www.jestjs.cn/)
### 一、整体介绍

1. JEST基础：API、异步测试、Mock数据，快照功能、定时器、延时器、Dom节点测试
2. react项目的测试：enzyme工具的讲解，TDD单元测试，BDD集成测试
3. 其它框架：Jasmine、MOCHA、jest
4. jest的优点：新/速度/API简单/隔离性好/IDE整合/多项目运行/覆盖率

### 二、环境搭建

```javascript
npm install jest -D //-D代表安装到devDependencies中,demojest版本8.5.5
```



三、demo

1.新建x.js和x.test.js文件

```pascal
"scripts": {
  "test": "jest"
},//package.json修改依赖,然后执行npm run test
```
<img width="350" alt="截屏2023-04-03 上午10 57 35" src="https://user-images.githubusercontent.com/31230553/229401307-c2918f3e-5fa7-4444-aa21-3690688f8497.png">

2.代码覆盖率如何生成？

```
//单元测试：模块
//集成测试：多个模块集成以后测试
//初始化jest，生成jest.config.js
npx jest --init
npx jest --coverage// 生成coverage文件可以看到代码覆盖率
```

<img width="564" alt="截屏2023-04-03 上午10 58 02" src="https://user-images.githubusercontent.com/31230553/229401355-faa67e2d-4ef5-4089-a977-f4aeb7b1f36c.png">


注意1:npx jest --init后报错，安装npm install --save-dev jest-environment-jsdom
<img width="574" alt="截屏2023-04-03 上午10 58 18" src="https://user-images.githubusercontent.com/31230553/229401386-0b0c8209-11e5-4206-9ff2-3472efa664fc.png">


四、匹配器

```
//===
.toBe()
//==
.toEqual()
//null
.toBeNull()
//undefined
.toBeUndefined()
//defined
.toBeDefined()
//boolean
.toBeTruthy()
.toBeFalsy()
```

