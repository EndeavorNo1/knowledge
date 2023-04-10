前端的单元测试在很多人看来都是一个可有可无的东西，理由一般有下面几条（以下内容统一称单元测试为单测）：  

1. 写单测比较费时，有这个时间不如多做几个需求
2. 测试在验收的时候对页面的功能都会操作一遍，写单测相当于做无用功
3. 后端提供给前端的接口需要保证质量，因此需要做单测，但前端很少需要提供接口给其他人. 

但随着业务的不断扩展，逻辑耦合越来越多，这时候需要单测的介入，帮助测试人员减轻压力，提高代码质量。还有一点，现在市面上很多开源项目都会有单测。

### 一、整体介绍

1. JEST可以做什么？

   API、异步测试、Mock数据，快照功能、定时器、延时器、Dom节点测试

2. 单元 vs 集成 vs 端到端

   - **单元测试**：测试应用程序的独立部分，通常与浅层渲染结合使用。

   - **集成测试：**测试不同部分是否工作或相互集成。通常通过安装或渲染组件来完成。

   - **e to e testing**：代表端到端。通常是将多个单元测试和集成测试组合成一个大测试的多步骤测试。测试在模拟浏览器中完成，测试运行时可能有也可能没有 UI。可以测试整个流程。

3. 其它框架：

   - Jasmine
   - MOCHA
   - jest
   - react-testing-library

4. jest的优点：

   ​	新/速度/API简单/隔离性好/IDE整合/多项目运行/覆盖率

5. jest的缺点：

   ​	需要编写更多代码，需要调试和维护

   ​	非关键测试失败可能会导致应用在持续集成方面被拒绝

6. 为什么要用jest：
   防止回归，回归已经修复的错误重新出现，使代码可以按照我们的预期进行

7. aifd可以测什么：

   1.可以单元测试，测函数、方法、过程、模块、对象，可以隔离代码进行区域验证

   2.可以组件测试：各种复用组件测试

   3.快照测试：测试UI不会意外更改

8. 为什么用enzyme：

   1.react测试需要更合适的工具，来测出更复杂的工具

   2.可以编写断言来模拟确认UI是否正常工作

### 二、环境搭建

1.安装

```javascript
//安装jest -D代表安装到devDependencies中,demojest版本8.5.5
npm install jest -D 
// 安装enzyme
npm install enzyme enzyme-adapter-react-16 react-test-renderer --save-dev
```

2.package.json配置

```json
"scripts": {
  "test": "jest --watchAll --coverage --colors"
  "test:clear":"jest --clearCache"
} 
//package.json修改依赖,然后执行npm run test
```

​	watchAll自动监听测试，

​	coverage生成覆盖率，

​	colors可根据覆盖率生成不同颜色的报告（<50%红色，50%~80%黄色， ≥80%绿色）

3.jest.config.js配置

```
//初始化jest，生成jest.config.js
npx jest --init
// 生成coverage文件可以看到代码覆盖率
npx jest --coverage
```

<img src="https://user-images.githubusercontent.com/31230553/229401355-faa67e2d-4ef5-4089-a977-f4aeb7b1f36c.png" alt="截屏2023-04-02 下午6.21.47" style="zoom:50%;" />

注意1:npx jest --init后报错，安装npm install --save-dev jest-environment-jsdom

<img src="https://user-images.githubusercontent.com/31230553/229401386-0b0c8209-11e5-4206-9ff2-3472efa664fc.png" alt="截屏2023-04-02 下午6.27.10" style="zoom:50%;" />

```js
module.exports = {
  testPathIgnorePatterns: ['/node_modules/'], //转换时需忽略的文件
};
```

4.配置好后，执行yarn test 就好啦

```
// 测试全部文件
yarn test
// 测试单个文件
yarn test 文件名

```



<img src="https://user-images.githubusercontent.com/31230553/229401307-c2918f3e-5fa7-4444-aa21-3690688f8497.png" alt="截屏2023-04-02 下午6.21.47" style="zoom:50%;"/>

5.注意：jest本身支持commonjs，想用ES6需要特殊处理，装babl就行

```
npm i @babel/core @babel/preset-env --dev
npm install babel-jest --save-dev
npm install react-test-renderer --save-dev 

```

### 三、咋写？

1. setup.js

```jsx
//这会导入 Enzyme 并设置适配器来运行我们的测试。
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

2. xx.test.js

   Jest 会识别任何后缀为`.spec.js`or的文件`.test.js`。它将搜索整个存储库中所有文件夹和所有文件的名称

   - `it`或者`test` 您将一个函数传递给此方法，测试运行器将将该函数作为测试块执行。

   - `describe` 此可选方法用于对任意数量的`it`or`test`语句进行分组。

   - `expect` 这是测试需要通过的条件。它将接收到的参数与匹配器进行比较。它还使您可以访问许多匹配器，让您验证不同的事物。

   - `mount` 此方法呈现完整的 DOM，包括我们正在运行测试的父组件的子组件。

   - `shallow` 这只会呈现我们正在测试的各个组件。它不渲染子组件。这使我们能够单独测试组件。

   ```jsx
   import { shallow, mount, render } from 'enzyme';
   
   const wrapper = shallow(<Foo />);
   ```

3. 匹配器

```js
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
//>
.toBeGreaterThan()
//<
.toBeLessThan()
//>=
.toBeGreaterThanOrEqual()
//<=
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

3.it or test 特殊情况

```js
// 只测这一个
it.only('only this', () => {
  shallow(<Com />);
});
// 跳过某个测试
it.skip("renders without crashing", () => {
  shallow(<Com />);
});


```

4.如何使用快照

快照测试会及时捕获组件的代码，以便将其与测试一起存储的参考快照文件进行比较。它用于跟踪应用程序 UI 中的更改。

快照的实际代码表示是一个 JSON 文件，这个 JSON 包含制作快照时组件的外观记录。在测试期间，Jest 将此 JSON 文件的内容与测试期间组件的输出进行比较。如果它们匹配，则测试通过；如果他们不这样做，则测试失败。

要将 Enzyme 包装器转换为与 Jest 快照测试兼容的格式，我们必须安装`enzyme-to-json`：

```
yarn add enzyme-to-json --save-dev
```

```js
it("renders correctly", () => {
  const tree = shallow(<Com />);
  expect(toJson(tree)).toMatchSnapshot();
});
```



### 四、我都遇到了哪些坑？ 


