// Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);


// Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr1 = [];
for (let i = 1; i <= 10; i++) {
  arr1.push('x');
}
console.log(arr1);


// Дан массив с числами. 
// Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr2 = [1, 2, 3, -5, 5, -6, 6, 3, -3];
let arr3 = [];
for (let elem of arr2) {
  if (elem > 0) {
    arr3.push(elem);
  };
};
console.log(arr3);