var http=require('http')
var server=http.createServer()

server.on('request',function(request,response){

    console.log('收到请求',request.url)
    response.write('haha')
    response.end()
})

server.listen(3000,function(){
    console.log('服务器启动成功,端口为3000')
})