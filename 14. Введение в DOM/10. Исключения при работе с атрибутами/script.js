// Дана также кнопка. По нажатию на кнопку прочитайте 
// и выведите на экран значение атрибута class нашего дива.
let elem = document.querySelector('#elem');
let button = document.querySelector('.button');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
button.addEventListener('click', function() {
  console.log(elem.className)
})


// Дана также кнопка. По нажатию на кнопку запишите 
// в атрибут class нашего дива какой-нибудь класс.
button1.addEventListener('click', function() {
  elem.className = elem.className + ' abc';
})


// Дана также кнопка. По нажатию на кнопку 
// получите массив CSS классов нашего дива.
button2.addEventListener('click', function() {
  let arr = elem.className.split(' ');
  console.log(arr)
})