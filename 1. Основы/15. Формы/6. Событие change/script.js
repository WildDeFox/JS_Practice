// Дан инпут и абзац. По изменению инпута 
// выведите его текст в абзац.
let input = document.querySelector('.input');
let elem = document.querySelector('.elem');

input.addEventListener('change', function() {
  elem.textContent = this.value
})


// Дан чекбокс. По изменению чебокса 
// выведите на экран его новое состояние.
let input2 = document.querySelector('.input2');
let elem2 = document.querySelector('.elem2');

input2.addEventListener('change', function() {
  elem2.textContent = this.checked
})


// Дан инпут. По его изменению проверьте, 
// количество символов в нем меньше 5-ти 
// или нет. Если меньше - покрасьте
// границу инпута в зеленый цвет, а
// если больше - в красный.
let input3 = document.querySelector('.input3');

input3.addEventListener('input', function() {
  if(input3.value.length < 5) {
    this.style.backgroundColor = 'red'
  } else {
    this.style.backgroundColor = 'green'
  }
})
