// Дан инпут. Пусть в него вводится текст. 
// Как только длина текста достигнет 5-ти, 
// выведите на экран сообщение об этом.
let input = document.querySelector('.input');
let elem = document.querySelector('.elem');

input.addEventListener('input', function() {
  if(this.value.length >= 5) {
    elem.textContent = 'Все, остановись!'
  }
})


// Дан инпут. Пусть в него разрешено ввести 
// 5 символов. Дан также абзац. По мере ввода
// символов в инпут пишите, сколько еще символов
// можно ввести. Когда количество символов
// превысит 5-ти, то в абзац выводите то,
// на сколько символов превышена длина текста.
let input1 = document.querySelector('.input1');
let elem1 = document.querySelector('.elem1');

input1.addEventListener('input', function() {
  if(this.value.length > 5) {
    console.log(this.value.length)
    elem1.textContent = (+this.value.length) - 5;
  }
})