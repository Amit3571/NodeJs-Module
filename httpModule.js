// const http=require('http');
// http.createServer((req,res)=>{
//     console.log(req.url);
    
//     res.end('<h1>hello students from 5600</h1>');
// }).listen(5600,()=>{
//     console.log(`server is listening`);
    
// })


// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
    
//     res.end('<h1>hello students from 5600</h1>');
// })

// server.listen(5600,()=>{
//     console.log(`server is listening`);
    
// })


const http=require('http');
const os=require('os');
const data=os.homedir();
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        console.log(req.url);
    
    res.end('<h1>hello students from home section</h1>');
    }

    else  if(req.url==='/about'){
        console.log(req.url);
    
    // res.write('<h1>how are you?</h1>');
    // res.write('<h1>how are you agaoin?</h1>');
    // res.end('<h1>hello students from About section</h1>');
    res.end(data)
        // res.end();
    }
    else  if(req.url==='/contact'){
        console.log(req.url);
    
    res.end('<h1>hello students from Contact section</h1>');
    }
    else{
        res.statusCode=404;
        res.end('page not found')
    }
})

server.listen(5600,()=>{
    console.log(`server is listening`);
    
})