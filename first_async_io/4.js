 // 编写一个程序，执行一个异步的对文件系统的操作：读取一个文件，并且在终端（标
 //  准输出 stdout）打印出这个文件中的内容的行数。类似于执行 cat file | wc -l
 //  这个命令。

 //  所要读取的文件的完整路径会在命令行第一个参数提供。


 var fs = require('fs');

 fs.readFile(process.argv[2],'utf8',(err, data)=>{
 	if (err) throw err;
 	var arr = data.split('\n');
 	console.log(arr.length-1);
 });