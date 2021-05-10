const express=require('express')
const Students=require('./students')

const router=express.Router()

//学生展示页面
router.get('/students',function(request,response){

        Students.findStu(function(err,students){
                if(err)return response.status(500).send('Server Error');

                response.render('index.html',{students})
        })
})


//添加学生页面
router.get('/students/new',function(request,response){

        response.render('new.html')
})


//添加学生
router.post('/students/new',function(request,response){

        Students.addStu(request.body,function(err){

                if(err)return response.status(500).send('Server Error');
                response.redirect('/students')
        })

})


//编辑学生页面
router.get('/students/edit',function(request,response){

        Students.findByID(request.query.id,function(err,student){
                if(err)return response.status(500).send('Server Error');

                response.render('edit.html',{student})
        })

})


//编辑学生
router.post('/students/edit',function(request,response){

        Students.updateByID(request.body,function(err){

                if(err)return response.status(500).send('Server Error');

                response.redirect('/students')
        })

})


//删除学生
router.get('/students/delete',function(request,response){

        Students.deleteByID(request.query.id, function (err) {
                if (err) {
                  return response.status(500).send('Server error.')
                }
                response.redirect('/students')
              })
})


module.exports=router