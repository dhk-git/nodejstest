process.on('tick', (count) => {
    console.log('tick이벤트발생함' + count);
});
setTimeout(function () {
    console.log('2초후에 실행되었음');
    process.emit('tick', '2');
}, 2000);