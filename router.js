const express=require('express')

const router=express.Router()


router.get('/students',function(request,response){


})

router.get('/students/new',function(request,response){

        response.render('new.html')
})

router.post('/students/new',function(request,response){


})

router.get('/students/edit',function(request,response){


})

router.post('/students/edit',function(request,response){


})

router.get('/students/delete',function(request,response){


})


module.exports=router