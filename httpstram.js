const http=require('http');
const fs=require('fs');
const server=http.createServer();

// server.on('request',(req,res)=>{
// fs.readFile('Data1.csv',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         res.end(data.toString())
//     }
// })
// })

server.on('request',(req,res)=>{
    // const readStream=fs.createReadStream('Data1.csv');
    const readStream=fs.createReadStream('Data1.csv');

    readStream.on('data',(datachunk)=>{
        res.write(datachunk.toString())
    })
    readStream.on('end',(err)=>{
        res.end('file not found')
    })
})
server.listen(4500,()=>{
    console.log('server running');
    
})