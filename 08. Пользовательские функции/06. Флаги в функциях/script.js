// Сделайте функцию, которая параметром будет принимать массив с числами, 
// и проверять, что все элементы в этом массиве являются четными числами.
function isPositivArr (arr) {
  for (elem of arr) {
    if (elem < 0) {
      return false;
    }
  }
  return true;
}
let arr = [1, 2, 3, 4, -5, 6];
console.log(isPositivArr(arr));


// Сделайте функцию, которая параметром будет принимать число 
// и проверять, что все цифры это числа являются нечетными.
function oddNum (num) {
  let strNum = String(num);
  
  for (let i = 0; i < strNum.length; i++) {
    if (+strNum[i] % 2 == 0) {
      return false;
    }
  }
  return true;
}
console.log(oddNum(13))


// Сделайте функцию, которая параметром будет принимать массив и проверять, 
// есть ли в этом массиве два одинаковых элемента подряд.
function order (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
}
let arr1 = [1, 2, 3, 4, 4, 6];
console.log(order(arr1));