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

