[阅读链接](https://beta.reactjs.org/learn)  
==== 
### 1.管理状态  
Q1声明式 UI 编程与命令式 UI 编程有何不同  
Q2如何枚举组件可能处于的不同视觉状态  
Q3如何从代码中触发不同视觉状态之间的变化  

> #### 1.use-immer（嵌套深的时候用）
> 
>  添加use-immer到您package.json的依赖项.   
>  npm install.   
>  然后替换import { useState } from 'react'为import { useImmer } from 'use-immer'.   

> #### 2.useReducer

```
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
```
```
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

[useEffect完整指南](https://overreacted.io/a-complete-guide-to-useeffect/)
==== 
1，获取数据
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: [] });
  //错误写法
  useEffect(async () => { // useEffect这就是不允许在函数中直接使用 async 
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  },[]);
 //正确写法
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  
  //加上loading和error
    useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  
  
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
```

[How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/)
===
[How to useCallback in React](https://www.robinwieruch.de/react-usecallback-hook/)
===

1.useCallback 用于记忆函数，而 useMemo 用于记忆值。  
2.React memo 用于包装 React 组件以防止重新渲染。  


[Why Do React Hooks Rely on Call Order?](https://overreacted.io/why-do-hooks-rely-on-call-order/)
===


将jsx转换成string html。
```
import ReactDOMServer from 'react-dom/server'

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div>
         <Component/>
         /* etc. */
    </div>
);
```
[相同参数，解决重复请求问题](https://github.com/alexreardon/memoize-one)

### 监听
```
function MyResponsiveComponent() {
  const width = useWindowWidth(); // Our custom Hook
  return (
    <p>Window width is {width}</p>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
```
### 钻石问题
```
function StatusMessage() {
  const width = useWindowWidth();
  const isOnline = useNetworkStatus();
  return (
    <>
      <p>Window width is {width}</p>
      <p>You are {isOnline ? 'online' : 'offline'}</p>
    </>
  );
}

function useSubscription(subscribe, unsubscribe, getValue) {
  const [state, setState] = useState(getValue());
  useEffect(() => {
    const handleChange = () => setState(getValue());
    subscribe(handleChange);
    return () => unsubscribe(handleChange);
  });
  return state;
}

function useWindowWidth() {
  const width = useSubscription(
    handler => window.addEventListener('resize', handler),
    handler => window.removeEventListener('resize', handler),
    () => window.innerWidth
  );
  return width;
}

function useNetworkStatus() {
  const isOnline = useSubscription(
    handler => {
      window.addEventListener('online', handler);
      window.addEventListener('offline', handler);
    },
    handler => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    },
    () => navigator.onLine
  );
  return isOnline;
}
```
Hooks 的设计目标之一是避免在高阶组件和渲染道具中普遍存在的深度嵌套的函数式样式。
[钩子规则](https://reactjs.org/docs/hooks-rules.html)
