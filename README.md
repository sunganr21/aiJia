# aiJia 試煉篇

##构建package.json
    1."name":项目名称
        1、不要在name中包含js, node字样；
        2、这个名字最终会是URL的一部分，命令行的参数，目录名，所以不能以点号或下划线开头；
        3、这个名字可能在require()方法中被调用，所以应该尽可能短；
    2."version": 版本号(默认"0.0.1")
    3."description": 描述(默认"")
    4."main": 主要文件，即接下来执行的文件(若无填写，默认执行文件下的index.js)
    5."scripts": {
    【Key是生命周期事件名，value是在事件点要跑的命令】
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "node index.js"
          【如果你的包里有server.js文件，npm默认将执行： node server.js,所以在这里运行手动修改为index.js】
        }
    6."author":作者名称(默认"")
    7."license": "ISC",
    8."dependencies": {
        }
        【dependencies字段是一个对象，它指定了依赖的包名和其版本范围的映射。版本范围是个有一个或多个空白分隔描述符的字符串。dependencies字段还可以用tarball或者git URL。】
详情请查看https://www.cnblogs.com/nullcc/p/5829218.html

##构建index.js篇
