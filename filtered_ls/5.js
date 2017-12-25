// 编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这
// 个列表。这次会有两个参数提供给你，第一个是所给的文件目录路径（如：path/to/
// dir），第二个参数则是需要过滤出来的文件的扩展名。

// 举个例子：如果第二个参数是 txt，那么你需要过滤出那些扩展名为 .txt的文件。

// 注意，第二个参数将不会带有开头的 .。

// 你需要在终端中打印出这个被过滤出来的列表，每一行一个文件。另外，你必须使用
// 异步的 I/O 操作。



//我的答案
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],(err,list)=>{
	if (err) throw err;

	list.forEach((item)=>{
		if(path.extname(item) == '.'+process.argv[3]){
			console.log(item);
		};
	});
	

})



//官方答案

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })



