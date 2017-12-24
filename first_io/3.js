 // 编写一个程序，执行一个同步的文件系统操作，读取一个文件，并且在终端（标准输
 //  出 stdout）打印出这个文件中的内容的行(\n)数。类似于执行 cat file | wc -l
 //  这个命令。

 //  所要读取的文件的完整路径会在命令行第一个参数提供。



//我的答案
var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();

var arr = file.split('\n');

console.log(arr.length-1);



//官方答案

// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

// 只要把 'utf8' 作为 readFileSync 的第二个参数传入
// 就可以不用 .toString() 来得到一个字符串
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
