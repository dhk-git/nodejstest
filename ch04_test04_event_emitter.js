var Calc = require('./ch04_test04_calcmodule');
var calc1 = new Calc();
calc1.emit('stop');
console.log('Calc에 stop이벤트 전달함.');