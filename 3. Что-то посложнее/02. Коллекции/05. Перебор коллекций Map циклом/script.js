let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

console.log(map.get(arr1));
console.log(map.get(arr2));


for (let [key, value] of map) {
  console.log(key);
  console.log(value);
}