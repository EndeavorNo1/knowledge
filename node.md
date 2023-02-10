#零散知识点  
1. _dirname - node自带查看路径
2. 引入：require 引出：export
3. 文件fs
```
  const fs = require('fs')
  fs.readdirSunc('./')//读取文件位置（同步）
  fs.readdir('./',(err,data)=>{//操作})（异步）
```
4.process.env
```
  process.env 是 Node.js 中的一个环境对象。其中保存着系统的环境的变量信息
  
```
5.Node.js 应用是由哪几部分组成
```
// 1. 引入 required 模块
var http = require("http");
// 2. 创建服务器
var http = require('http');
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

```
