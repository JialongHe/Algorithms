const http = require('http')
const url = require('url')
const tools = require('./common')

console.log(tools)

http.createServer(function(req, res) {
    console.log(req.url);

    res.writeHead(200, {'Context-Type': "text/plain"});  
    res.write('<head><meta charset="utf-8"/></head>');
    var api = tools("api/focus")

    if(res.url !== '/favicon.ico') {
        var userinfo = url.parse(req.url, true).query;
        console.log(userinfo.name)
    }
    res.write(api)
    res.end();
}).listen(8081);

console.log('Server running ar http://127.0.0.1:8081');