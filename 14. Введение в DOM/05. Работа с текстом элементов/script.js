// Дан абзац и кнопка. По клику на кнопку прочитайте текст
// абзаца и выведите его в консоль.
let elem1 = document.querySelector(".elem1");
let button1 = document.querySelector(".button1");
button1.addEventListener("click", function () {
  console.log(elem1.textContent);
});


// Дан абзац и кнопка. По клику на кнопку 
// запишите в абзац новый текст.
let elem2 = document.querySelector('.elem2');
let button2 = document.querySelector('.button2');
button2.addEventListener('click', function() {
  elem2.textContent = 'А вот и новый текст';
})


// Даны два абзаца, содержащие своим текстом какие-то числа,
// и кнопка. По нажатию на кнопку выведите на экран 
// сумму хранящихся чисел.
let elem3_1 = document.querySelector('.elem3_1');
let elem3_2 = document.querySelector('.elem3_2');
let elem3_3 = document.querySelector('.elem3_3');
let button3 = document.querySelector('.button3');
button3.addEventListener('click', function() {
  elem3_3.textContent = +elem3_1.textContent + +elem3_2.textContent;
})


// Дан абзац с числом и кнопка. По нажатию на кнопку 
// прибавьте к значению абзаца единицу и 
// запишите полученное число обратно.
let elem4 = document.querySelector('.elem4');
let button4 = document.querySelector('.button4');
button4.addEventListener('click', function() {
  elem4.textContent = +elem4.textContent + 1; 
})