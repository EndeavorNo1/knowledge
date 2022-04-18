#零散知识点  
1. _dirname - node自带查看路径
2. 引入：require 引出：export
3. 文件fs
```
  const fs = require('fs')
  fs.readdirSunc('./')//读取文件位置（同步）
  fs.readdir('./',(err,data)=>{//操作})（异步）
```
