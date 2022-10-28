

const http = require('http');


const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/overview'){
        
        res.end('this is overview!');

    }else if(pathName === '/product'){  

        res.end('this is the product');
    
    }
    else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        
        });
        res.end('<h1>Page not found !! </h1>');
    }
    
});


server.listen(2000, '127.0.0.1', () => {
    console.log('listening to requests on port 2000');
});