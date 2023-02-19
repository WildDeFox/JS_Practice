// Пусть даны 3 массива. Создайте коллекцию Map,
// сделайте ключами коллекции эти массивы,
// а значениями - какие-нибудь строки.
let map = new Map();

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

map.set(arr1, 'text1');
map.set(arr2, 'text2');
map.set(arr3, 'text3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));


// Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map,
// сделайте ключами коллекции объекты,
// а значениями - соответствующие массивы.

let map1 = new Map;

let obj1 = {1: 'a'};
let obj2 = {2: 'b'};
let obj3 = {3: 'c'};

map1.set(obj1, arr1);
map1.set(obj2, arr2);
map1.set(obj3, arr3);

console.log(map1.get(obj1));
console.log(map1.get(obj2));
console.log(map1.get(obj3))