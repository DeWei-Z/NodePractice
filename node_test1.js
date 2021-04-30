var fs=require('fs')

/* fs.readFile('./hello.txt',function(error,data){
    console.log(data.toString())
})
 */
fs.writeFile('./你好.txt','你好啊',function(error){
    console.log('success')
})