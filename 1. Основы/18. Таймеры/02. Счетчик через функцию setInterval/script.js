// Пусть дана переменная, в которой изначально хранится
// число 100. Запустите таймер, который каждую секунду
// будет уменьшать значение этой переменной на 1 и
// выводить это значение в консоль.
let count = 100;

setInterval(function() {
  console.log(count);
  count--;
}, 1000)