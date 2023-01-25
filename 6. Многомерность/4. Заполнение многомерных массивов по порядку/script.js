// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]
let arr = [];
let count = 1;

for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let k = 0; k < 2; k++) {
    arr[i].push(count);
    count++
  }
}
console.log(arr);


// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let arr1 = [];
let counter1 = 2;

for (let i = 0; i < 4; i++) {
  arr1[i] = [];
  for (let k = 0; k < 3; k++) {
    arr1[i].push(counter1);
    counter1 += 2;
  }
}
console.log(arr1)


// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let arr2 = [];
let count2 = 1;

for (let i = 0; i < 2; i++) {
  arr2[i] = [];
  for (let j = 0; j < 2; j++) {
    arr2[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr2[i][j].push(count2);
      count2++;
    }
  }
}
console.log(arr2)