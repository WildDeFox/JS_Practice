// Дан чекбокс и кнопка. Сделайте так, чтобы каждый
// клик по кнопке приводил к смене состояния чекбокса.
let input = document.querySelector('.input');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  input.checked = !input.checked;
})