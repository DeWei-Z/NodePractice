const fs=require('fs')
const db='./db.json'

function test(){
    //更新学生数据
        fs.readFile(db,'utf8',function(err,data){
    
            console.log(data)
            const students=JSON.parse(data).students
            console.log('解析后',students)
           
            
            
        })
    }

    test()