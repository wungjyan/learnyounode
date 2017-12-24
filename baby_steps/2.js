// 编写一个简单的程序，使其能接收一个或者多个命令行参数，并且在终端（标准输出
//  stdout）中打印出这些参数的总和。




//我的答案
var arr = process.argv.slice(2);
var num = 0;
for(var i=0;i<arr.length;i++){
	num += Number(arr[i]);
}

console.log(num);


//官方答案

// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)