var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨');
    req.user = 'mike';
    next();
});

app.use(function(req,res,next){
    console.log('두번째 미들웨어 호출됨');
    //res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});

    var person = {name : '소t시', age : 20};
    // res.send(person);
    // var personStr = JSON.stringify(person);
    // res.send(personStr);
    res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
    res.write(person);
    res.end();
});

var server =  http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹서버를 실행함 : ' + app.get('port'));
});