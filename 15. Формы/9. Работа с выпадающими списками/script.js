// Дан селект, абзац и кнопка. По клику на кнопку
// выведите текст выбранного пункта списка в абзац.
let select = document.querySelector('.select');
let text = document.querySelector('.text');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  text.textContent = select.value;
})