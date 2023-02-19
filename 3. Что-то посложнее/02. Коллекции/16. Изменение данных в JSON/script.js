// Дан следующий JSON:
// Добавьте в конец строки еще одного юзера.
let json = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(json);
arr.push('user6');
let res = JSON.stringify(arr)
console.log(res)
