// Сделайте функцию appendText, которая первым параметром
// будет принимать DOM элемент, а вторым - текст. Сделайте
// так, чтобы данная функция добавляла текст в
// конец этого элемента.
let elems = document.querySelectorAll('.elem1');

function appendText(elem, text) {
  elem.textContent += text
}


// Даны абзацы. Получите их, переберите циклом и каждому
// добавьте в конец '!' с помощью функции appendText,
// сделанной в предыдущей задаче.
for(let elem of elems) {
  appendText(elem, '!');
}


// Сделайте функцию setValue, которая первым параметром
// будет принимать ссылку на инпут, а вторым - текст.
// Сделайте так, чтобы данная функция устанавливала
// переданный текст в value инпута.
function setValue(elem, valueText) {
  elem.value = valueText;
}

let input = document.querySelector('.input');
setValue(input, 'New text')