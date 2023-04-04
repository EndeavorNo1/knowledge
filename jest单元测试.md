前端的单元测试在很多人看来都是一个可有可无的东西，理由一般有下面几条（以下内容统一称单元测试为单测）：  

1. 写单测比较费时，有这个时间不如多做几个需求
2. 测试在验收的时候对页面的功能都会操作一遍，写单测相当于做无用功
3. 后端提供给前端的接口需要保证质量，因此需要做单测，但前端很少需要提供接口给其他人. 

但随着aifd业务的不断扩展，逻辑耦合越来越多，这时候需要单测的介入，帮助测试人员减轻压力，提高代码质量。还有一点，现在市面上很多开源项目都会有单测。

### 一、整体介绍

1. JEST基础：API、异步测试、Mock数据，快照功能、定时器、延时器、Dom节点测试
2. react项目的测试：enzyme工具的讲解，TDD单元测试，BDD集成测试
3. 其它框架：Jasmine、MOCHA、jest
4. jest的优点：新/速度/API简单/隔离性好/IDE整合/多项目运行/覆盖率

### 二、环境搭建

```javascript
npm install jest -D //-D代表安装到devDependencies中,demojest版本8.5.5
```

### 三、DEMO

1.新建x.js和x.test.js文件

2.package.json配置

```pascal
"scripts": {
  "test": "jest --watchAll --coverage --colors"
}
//package.json修改依赖,然后执行npm run test
```

watchAll自动监听测试，coverage生成覆盖率，--colors可根据覆盖率生成不同颜色的报告（<50%红色，50%~80%黄色， ≥80%绿色）

<img src="https://user-images.githubusercontent.com/31230553/229401307-c2918f3e-5fa7-4444-aa21-3690688f8497.png" alt="截屏2023-04-02 下午6.21.47" style="zoom:50%;"/>

3.代码覆盖率如何生成？

```
//单元测试：模块
//集成测试：多个模块集成以后测试
//初始化jest，生成jest.config.js
npx jest --init
npx jest --coverage// 生成coverage文件可以看到代码覆盖率
```

<img src="https://user-images.githubusercontent.com/31230553/229401355-faa67e2d-4ef5-4089-a977-f4aeb7b1f36c.png" alt="截屏2023-04-02 下午6.21.47" style="zoom:50%;" />

注意1:npx jest --init后报错，安装npm install --save-dev jest-environment-jsdom

<img src="https://user-images.githubusercontent.com/31230553/229401386-0b0c8209-11e5-4206-9ff2-3472efa664fc.png" alt="截屏2023-04-02 下午6.27.10" style="zoom:50%;" />

4.jest.config.js文件配置

```
module.exports = {
  testPathIgnorePatterns: ['/node_modules/'], //转换时需忽略的文件
};
```

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
//><>=
.toBeGreaterThan()
.toBeLessThan()
.toBeGreaterThanOrEqual()
.toBeLessThanOrEqual()
//无限接近
.toBeCloseTo()
//字符串包含
.toMatch()
//数组包含
.toContain()
//异常
.toThrow()
```

注意：jest本身支持commonjs，想用ES6需要特殊处理，装babl就行

```
npm i @babel/core @babel/preset-env --dev
npm install babel-jest --save-dev
npm install enzyme enzyme-adapter-react-16 --save-dev
npm install react-test-renderer --save-dev 
```
[来源1](https://cloud.tencent.com/developer/article/2022216)
