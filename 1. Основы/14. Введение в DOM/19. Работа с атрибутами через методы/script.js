// ---- Получение атрибута ----

// Дан элемент:
// <input id="elem" value="text">
// Получите значение его атрибута value.
let input = document.querySelector('#elem');
console.log(input.getAttribute('value'))

// Дан элемент:
// <input id="elem1" class="www zzz">
// Получите значение его атрибута class.
let input1 = document.querySelector('#elem1');
console.log(input1.getAttribute('class'))


// ---- Установка атрибута ----

// Дан элемент:
// <input id="elem2">
// Установите его атрибут value в значение 'text'.
let input2 = document.querySelector('#elem2');
input2.setAttribute('value', 'text')

// Установите ему атрибут class в значение 'valid'.
input2.setAttribute('class', 'valid');


// ---- Удаление атрибута ----
// Дан элемент:
// <input id="elem3" value="text">
// Удалите у него атрибут value.
let input3 = document.querySelector('#elem3');
input3.removeAttribute('value');
console.log(input3)


// ---- Проверка атрибута ----
// Дан элемент:
// <input id="elem4" value="text">
// Проверьте наличие у него атрибута value.
let input4 = document.querySelector('#elem4');
console.log(input4.hasAttribute('value'))