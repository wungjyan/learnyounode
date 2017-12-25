
//我的答案
var fs = require('fs');
var path =require('path');

module.exports = function(folder,ext,callback){
	fs.readdir(folder,(err, list)=>{
		if(err){
			return callback(err)
		}
		var newList = list.filter((item)=>{
			return path.extname(item) == '.'+ext;
		});

		callback(null,newList)
	})
}




//官方答案

// var fs = require('fs')                                  
// var path = require('path')                              
                                                     
// module.exports = function (dir, filterStr, callback) {  
// 	fs.readdir(dir, function (err, list) {                
// 		 if (err) {                                          
// 		   return callback(err)                              
// 		 }                                                   
		                                                     
// 		 list = list.filter(function (file) {                
// 		   return path.extname(file) === '.' + filterStr     
// 		 })                                                  
		                                                     
// 		 callback(null, list)                                
// 	})                                                    
// }                                                       