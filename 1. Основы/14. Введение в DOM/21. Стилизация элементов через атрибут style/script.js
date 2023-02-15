// Дан див и кнопка. По клику на кнопку 
// добавьте диву ширину, высоту и границу.
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  elem.style.width = '200px';
  elem.style.height = '200px';
  elem.style.border = '1px solid red'
})


// Дан див с текстом и кнопка. По клику на кнопку 
// установите диву размер шрифта в 20px,
// а также верхнюю границу и фон.
let elem1 = document.querySelector('.elem1');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function () {
  elem1.style.fontSize = '20px';
  elem1.style.borderTop = '2px solid red';
  elem1.style.backgroundColor = 'green';
})