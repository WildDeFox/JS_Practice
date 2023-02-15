// Дан чекбокс и две кнопки. По нажатию на первую 
// кнопку установите чекбокс в отмеченное состояние, 
// а по нажатию на вторую - в неотмеченное.
let input = document.querySelector('.input');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

button1.addEventListener('click', function() {
  input.checked = true
})

button2.addEventListener('click', function() {
  input.checked = false;
})


// Дан чекбокс, кнопка и абзац. По нажатию на
// кнопку, если чекбокс отмечен, выведите в
// абзац слово 'привет', а если чекбокс
// не отмечен, то слово 'пока'.
let input1 = document.querySelector('.input1');
let button3 = document.querySelector('.button3');
let text = document.querySelector('.text');

button3.addEventListener('click', function() {
  if (input1.checked == true) {
    text.textContent = 'Привет'
  } else {
    text.textContent = 'Пока'
  }
})