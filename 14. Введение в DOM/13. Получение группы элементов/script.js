// Даны абзацы и кнопка. По нажатию на кнопку
// найдите все абзацы, переберите из циклом и
// установите текст каждого абзаца в значение 'text'.
let texts = document.querySelectorAll(".text");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  for (let text of texts) {
    text.textContent = "text";
  }
});


// Даны абзацы с текстом и кнопка. По нажатию 
// на кнопку запишите в конец текста каждого 
// абзаца его порядковый номер.
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function() {
  for(let i = 0; i < texts.length; i++) {
    texts[i].textContent += i;
  }
})


// Даны инпуты с числами, абзац и кнопка. 
// По нажатию на кнопку найдите сумму чисел из 
// инпутов и запишите эту сумму в текст абзаца.
let inputs = document.querySelectorAll('.input');
let elem = document.querySelector('.elem');
let button2 = document.querySelector('.button2');

button2.addEventListener('click', function() {
  let sum = 0;

  for (let elem of inputs) {
    sum += +elem.value;
  }

  elem.textContent += sum;
})