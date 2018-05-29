const koa=require('koa');
const app=new koa();//代替express();
const path=require('path');
const fs=require('fs');


// 1.0 port变量的值是从环境变量中来的
const port = process.env.PORT || 8080;
