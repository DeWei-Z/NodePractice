const express=require('express')
const app=express()


const comments = [{
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


app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'))


app.engine('html', require('express-art-template'));




app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/',function(request,response){

    response.render('index.html',{
        comments:comments
    })
})

app.get('/post',function(request,response){
    response.render('post.html')
})

app.post('/post',function(request,response){

    const comment=request.body
    console.log(comment)
    comment.dateTime='2021-5-8'
    comments.unshift(comment)
    response.redirect('/')
})



app.listen(3000, function () {
    console.log('running...')
  })