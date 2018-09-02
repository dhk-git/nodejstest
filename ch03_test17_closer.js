function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function(){
        count += 1;
        return count + ':' +  a + ' + ' + b + ' = ' + result;
    };

    return history;
}

var add_history = add(10, 10, function (result) {
    console.log(result);
});

console.log(typeof(add_history));

console.log(add_history());
console.log(add_history());
console.log(typeof(add_history));
console.log(add_history());