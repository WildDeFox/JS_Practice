// Дан абзац и кнопка. По клику на кнопку прочитайте 
// HTML код абзаца и выведите его в консоль.
let elem1 = document.querySelector('.elem1');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function() {
  console.log(elem1.innerHTML)
})


// Дан абзац и кнопка. По клику на кнопку запишите 
// в абзац новый текст так, чтобы он был жирным.
let elem2 = document.querySelector('.elem2');
let button2 = document.querySelector('.button2');

button2.addEventListener('click', function() {
  elem2.innerHTML = '<b>Новый текст</b>'
})