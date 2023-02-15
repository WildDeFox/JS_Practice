// Дан следующий инпут:
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите 
// на экран содержимое атрибута type указанного выше инпута.
let elem = document.querySelector('#elem');
let button = document.querySelector('.button');
button.addEventListener('click', function() {
  console.log(elem.type)
})


// По нажатию на кнопку запишите в атрибут type значение submit.
button.addEventListener('click', function() {
  elem.type = 'submit';
  console.log(elem.type)
})


// Пусть у вас есть ссылка в виде тега a, кнопка и абзац.
// По нажатию на кнопку выведите в абзац содержимое 
// атрибута href ссылки.
let link1 = document.querySelector('.link1');
let elem1 = document.querySelector('.elem1');
let button1 = document.querySelector('.button1');
button1.addEventListener('click', function(){
  elem1.textContent = link1.href
})


// Пусть у вас есть ссылка и кнопка. 
// По нажатию на кнопку добавьте в конец текста ссылки 
// содержимое ее атрибута href в круглых скобках.
let link2 = document.querySelector('.link2');
let button2 = document.querySelector('.button2');
button2.addEventListener('click', function() {
  link2.textContent = link2.textContent + "(" + link2.href + ")"
})


// Пусть у вас есть картинка. Разместите ее на странице 
// с помощью тега img. Пусть даны также кнопка и абзац. 
// Сделайте так, чтобы по клику на кнопку в абзац 
// записался путь к картинки из ее атрибута src.
let img3 = document.querySelector('.img3');
let elem3 = document.querySelector('.elem3');
let button3 = document.querySelector('.button3');
button3.addEventListener('click', function() {
  elem3.textContent = img3.src
})


// По нажатию на кнопку в атрибут width запишите значение 300.
button3.addEventListener('click', function() {
  img3.width = '300'
})


// Пусть в атрибуте width задана некоторая ширина.
// Сделайте кнопку, по нажатию на которую ширина 
// картинки будет увеличиваться в 2 раза.
let button3_1 = document.querySelector('.button3_1');
button3_1.addEventListener('click', function() {
  img3.width = img3.width * 2;
})