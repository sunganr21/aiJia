/*
var http=require('http');
http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('Hello World!\n');
}).listen(8080,"127.0.0.1");
console.log('Server running at http://127.0.0.1:8080');
*/
//1.0 获取通通过环境变量设置到 NODE_EVN的值
'use strict'

let env = process.env.NODE_EVN.trim();

//2.0 判断evn到底是开发环境还是生产环境
if(env == 'dev')
{
    //开发环境
    require('./src/index.js');
}else{
    //生产环境
    require('./dist/index.js');
}