
//我的答案
var mymodule = require('./mymodule.js');

mymodule(process.argv[2],process.argv[3],(err, data)=>{
	if (err) {
		console.log(err);
	}

	data.forEach((item)=>{
		console.log(item);
	})
})



//官方答案

 // var filterFn = require('./solution_filter.js')         
 // var dir = process.argv[2]                              
 // var filterStr = process.argv[3]                        
                                                        
 // filterFn(dir, filterStr, function (err, list) {        
 //   if (err) {                                           
 //     return console.error('There was an error:', err)   
 //   }                                                    
                                                        
 //   list.forEach(function (file) {                       
 //     console.log(file)                                  
 //   })                                                   
 // })                                                     