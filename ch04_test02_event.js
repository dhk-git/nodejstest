process.on('exit', () => {
    console.log('exit 이벤트 발생');
});
setTimeout(() => {
    console.log('2초후에 실행');
}, 2000);
console.log('2초후에 실행될것임');