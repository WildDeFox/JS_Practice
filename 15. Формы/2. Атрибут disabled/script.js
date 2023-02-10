// Дан инпут и кнопка. По нажатию на кнопку 
// заблокируйте инпут.
let input = document.querySelector('.input');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  input.disabled = true
})


// Дан инпут и две кнопки. Пусть нажатие
// на первую кнопку блокирует инпут, 
// а нажатие на вторую - отблокирует.
let input1 = document.querySelector('.input1');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

button1.addEventListener('click', function() {
  input1.disabled = true;
})

button2.addEventListener('click', function() {
  input1.disabled = false;
})


// Дан инпут и кнопка. По нажатию на кнопку
// узнайте, заблокирован инпут или нет.
let button3 = document.querySelector('.button3');
let elem = document.querySelector('.elem');

button3.addEventListener('click', function() {
  elem.textContent = input1.disabled;
})