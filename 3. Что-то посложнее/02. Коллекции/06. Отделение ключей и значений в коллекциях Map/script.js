// Пусть дана коллекция Map. Получите массив
// ее ключей и переберите их циклом for-of.
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

let keys = map.keys();

for(let key of keys) {
  console.log(key)
}


// Пусть дана коллекция Map. Получите массив
// ее элементов и переберите их циклом for-of.
let values = map.values();
for (let value of values){
  console.log(value)
}