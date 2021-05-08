const express=require('express')
const fs=require('fs')

const app=express()

app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'))

app.engine('html', require('express-art-template'));

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',function(request,response){

    response.render('index.html')
})



app.listen(3000, function () {
    console.log('running 3000...')
  })