// Дан массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.length);
delete arr[2];
delete arr[4];
console.log(arr.length);
console.log(arr);