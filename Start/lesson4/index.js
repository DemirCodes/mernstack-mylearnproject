const fs = require('fs');
const url = require('url');
const http = require('http');



const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/overview')
    {
        res.end('This is overview');
    }
    else if(pathName === '/product')
    {
        res.end('This is product');
    }
    else if(pathName === '/api'){

        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err,data) =>{
            const productData = JSON.parse(data);
            res.writeHead(200, { 'Content-type': 'application/json'});
            res.end('API');
        });
    }
    else{
        res.writeHead(404,{
            'content-type': 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not found !</h1>');
    }
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('listening to requests on port 8000');
});