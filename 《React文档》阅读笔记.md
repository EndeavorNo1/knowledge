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

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
  });

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
