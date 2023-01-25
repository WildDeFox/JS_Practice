// Дан двухмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [[1, 2, 3], [4, 5], [6]];
for (let subArr of arr) {
  for (let elem of subArr) {
    console.log(elem);
  };
};


// Дан трехмерный массив с числами:
// С помощью вложенных циклов найдите сумму элементов этого массива.
let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let subArr of arr1) {
  for (let subArrSub of subArr) {
    for (let elem of subArrSub) {
      console.log(elem);
    };
  };
};


// Решите предыдущие две задачи через цикл for.
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    for (let k = 0; k < arr1[i][j].length; k++) {
      console.log(arr1[i][j][k])
    }
  }
}