// Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:
let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr1.length - 1; i++) {
  console.log(arr1[i]);
}


// Выведите в консоль элементы следующего массива в обратном порядке:
let arr3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr3.length - 1; i >= 0; i--) {
  console.log(arr3[i]);
}