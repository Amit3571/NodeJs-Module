const fs=require('fs');

fs.readFile('myfile.txt','utf-8',(error,data)=>{
    console.log(data);
})