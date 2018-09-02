var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%B6%94%EC%84%9D';

var curUrl = url.parse(urlStr);
//console.dir(curUrl);

console.log(curUrl.query);

var querystring = require('querystring');

var params = querystring.parse(curUrl.query);

console.log(params.sm);
console.log(params.ie);
console.log(params.query);