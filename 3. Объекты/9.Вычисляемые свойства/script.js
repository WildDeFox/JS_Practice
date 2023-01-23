// Дан объект:

// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// Даны переменные:

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// Сделайте так, чтобы ключи объекта брались из этих переменных.
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
  [key1]: 1,
  [key2]: 2,
  [key3]: 3
}
console.log(obj);
