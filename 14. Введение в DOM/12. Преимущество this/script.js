// Даны 5 абзацев с какими-то текстами. 
// По клику на любой абзац запишите в конец 
// его текста восклицательный знак.
let elem1 = document.querySelector('.elem1');
let elem2 = document.querySelector('.elem2');
let elem3 = document.querySelector('.elem3');
let elem4 = document.querySelector('.elem4');
let elem5 = document.querySelector('.elem5');

function func() {
  this.textContent = this.textContent + '!';
}

elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);


// Даны 3 инпута, в которых записаны какие-то числа.
// По потери фокуса в любом из инпутов 
// возведите стоящее в нем число в квадрат.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');

function sqrt() {
  this.value = (+this.value) ** 2
}

input1.addEventListener('blur', sqrt);
input2.addEventListener('blur', sqrt);
input3.addEventListener('blur', sqrt);