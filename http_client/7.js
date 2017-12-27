// 编写一个程序来发起一个 HTTP GET 请求，所请求的 URL
// 为命令行参数的第一个。然后将每一个 "data"
// 事件所得的数据，以字符串形式在终端（标准输出 stdout）的新的一行打印出来。



//我的答案
const http = require('http');

http.get(process.argv[2],(res)=>{
	res.on('data',(data)=>{
		console.log(data.toString());
	})
})



//官方答案

// var http = require('http')

//   http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   }).on('error', console.error)