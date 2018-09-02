var users = [{ name: '소녀시대', age: 20 }, { name: '소녀시대2', age: 20 }, { name: '소녀시대3', age: 20 }];

users.push({ name: '소녀시대3', age: 20 });
console.log('배열의개수 : ' + users.length);

var elem = users.pop();
console.log('배열의개수 : ' + users.length);
/*
users.unshift({ name: '소녀시대4', age: 20 });
console.log(users);
users.shift();
console.log(users);
console.dir(users);
delete users[1];
console.dir(users);
users.forEach((elem, index) => {
    console.log(elem);
});
*/
users.splice(1, 0, { name: '소녀시대3', age: 20 });
users.splice(2, 1);