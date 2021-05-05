const http=require('http')
const fs = require('fs')
const template=require('art-template')



const server=http.createServer()

const comments = [
    {
      name: '张三',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三2',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三3',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三4',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三5',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    }
  ]


server.on('request',function(request,response){
    const myURL = new URL(request.url, 'http://localhost:3000');
   
    console.log('收到请求',request.url)
    if(myURL.pathname==='/'){

        fs.readFile('./src/index.html',function(err,data){

            if(err) return response.end('404')
            const htmlStr=template.render(data.toString(),{
                comments:comments
            })
            response.end(htmlStr)
        })

    }else if(myURL.pathname.indexOf('/public')===0){

        fs.readFile('.'+request.url,function(err,data){

            if(err) return response.end('404')
            response.end(data)
        })

    }else if(myURL.pathname==='/post'){

        fs.readFile('./src/post.html',function(err,data){

            if(err) return response.end('404')
            response.end(data)

        })
    }else if(myURL.pathname==='/comments'){

        const obj = Object.fromEntries(myURL.searchParams);
        // const stringifyObj = JSON.stringify(obj);
        
        const comment=obj
        comment.dateTime='2021-5-5'
        comments.unshift(comment)

        response.statusCode=302
        response.setHeader('Location','/')
        response.end()
       

    }
})

server.listen(3000,function(){
    console.log('服务器启动成功,端口为3000')
})