var fs = require('fs');

//동기
var data = fs.readFileSync('./package.json', 'utf8');
console.log(data);

//비동기
fs.readFile('./package.json', 'utf8', function(err, data){
    console.log(data);
});

//파일쓰기
fs.writeFile('./output.txt', 'Hello',function(err){
    if(err){
        console.log('에러발생');
        console.dir(err);
        return;
    }
    console.log('쓰기완료');
});