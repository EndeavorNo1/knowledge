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
