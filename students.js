const fs=require('fs')
const db='./db.json'


exports.findStu=function(callback){
//获取学生列表
    fs.readFile(db,'utf8',function(err,data){

        if(err)return callback(err);

        callback(null,JSON.parse(data).students)
    })
}

exports.findByID=function(id,callback){
//根据id获取学生信息
    fs.readFile(db,'utf8',function(err,data){

        if(err)return callback(err);

        const students=JSON.parse(data).students
        const result=students.find(function(item){

            return item.id===parseInt(id)
        })

        callback(null,result)
    })
}

exports.addStu=function(student,callback){
//添加学生
    fs.readFile(db,'utf8',function(err,data){

        if(err)return callback(err);

        const students=JSON.parse(data).students
        students.unshift(student)

        const newData=JSON.stringify({students})

        fs.writeFile(db,newData,function(err){

            if(err)return callback(err);
            callback(null)

        })
    })
}

exports.updateByID=function(student,callback){
//更新学生数据
    fs.readFile(db,'utf8',function(err,data){

        if(err)return callback(err);

        const students=JSON.parse(data).students
        student.id=parseInt(student.id)
    })
}