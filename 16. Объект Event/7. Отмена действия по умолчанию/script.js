// Даны ссылки. Сделайте так, чтобы по клику на ссылку 
// ей в конец записывался ее href, а перехода по ссылке
// не происходило.
let link = document.querySelector('.link');

link.addEventListener('click', function(e) {
  e.preventDefault();
  this.textContent += ' ' + this.href;
})


// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся
// числа. Сделайте так, чтобы по клику на ссылку в абзац
// записалась сумма введенных чисел.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let elem = document.querySelector('.elem');
let link2 = document.querySelector('.link2');

link2.addEventListener('click', function(e) {
  e.preventDefault();
  elem.textContent = +input1.value + +input2.value
})