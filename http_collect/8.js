 // 编写一个程序，发起一个 HTTP GET 请求，请求的 URL
 //  为所提供给你的命令行参数的第一个。收集所有服务器所返回的数据（不仅仅包括
 //  "data" 事件）然后在终端（标准输出 stdout）用两行打印出来。

 //  你所打印的内容，第一行应该是一个整数，用来表示你所收到的字符串内容长度，第
 //  二行则是服务器返回给你的完整的字符串结果。




//我的答案
 const http = require('http');

 http.get(process.argv[2], (res)=>{
 	res.setEncoding('utf8');
 	let result = '';
 	res.on('data',(chunk)=>{
 		result += chunk;
 	});

 	res.on('end',()=>{
 		console.log(result.length+'\n'+result);
 	})
 })



//官方答案

// var http = require('http')                      
// var bl = require('bl')                          
                                                
// http.get(process.argv[2], function (response) { 
//   response.pipe(bl(function (err, data) {       
//     if (err) {                                  
//       return console.error(err)                 
//     }                                           
//     data = data.toString()                      
//     console.log(data.length)                    
//     console.log(data)                           
//   }))                                           
// })                                              