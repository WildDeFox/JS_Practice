// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = []; // создаем пустой массив
// Внешний цикл будет создавать подмасивы, а внутренний их заполнять
for (let i = 0; i < 3; i++) {
  arr[i] = []; // создаем подмассив
  for (let j = 1; j < 6; j++) {
    arr[i].push(j); // хаполняем подмассив числами
  }
}
console.log(arr)


// формируйте с помощью двух вложенных циклов следующий массив:
// [
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x']
// ]
let arr1 = [];
for (let i = 0; i < 3; i++) {
  arr1[i] = [];
  for (let j = 0; j < 4; j++) {
    arr1[i].push('x');
  }
}
console.log(arr1)


// Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
let arr2 = [];
for (let i = 0; i < 3; i++) {
  arr2[i] = [];
  for (let j = 0; j < 2; j++) {
    arr2[i][j] = [];
    for (let k = 1; k < 6; k++) {
      arr2[i][j].push(k);
    }
  }
}
console.log(arr2)