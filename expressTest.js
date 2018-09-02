var express = require('express');

var app = express();
//app.use(express.static('public'));

// app.all('/a', function(request, response){
//     response.send('<h1>Page1</h1>')
// });

// app.all('/b', function(request, response){
//     response.send('<h1>Page2</h1>')
// });

app.use(function (request, response) {
    response.send('<h1>Page2</h1>');
});

app.listen(52773, function () {
    console.log('Server Running');
});