// Выведите на экран случайное целое число от 1 до 100.
console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1);


// С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
};
console.log(arr);