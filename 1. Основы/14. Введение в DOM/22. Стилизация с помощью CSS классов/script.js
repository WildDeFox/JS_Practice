// Дан абзац. Даны кнопки 'перечеркнуть', 
// 'сделать жирным', 'сделать красным'.
// Пусть по нажатию на каждую кнопку заданное 
// действие происходит с абзацем (становится красным, например).
let elem = document.querySelector('.elem');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.addEventListener('click', function() {
  elem.classList.toggle('line');
});

button2.addEventListener('click', function() {
  elem.classList.toggle('bold');
})

button3.addEventListener('click', function() {
  elem.classList.toggle('red')
})


// Модифицируйте предыдущую задачу так, чтобы повторное нажатие на 
// кнопку отменяло действие этой кнопки.