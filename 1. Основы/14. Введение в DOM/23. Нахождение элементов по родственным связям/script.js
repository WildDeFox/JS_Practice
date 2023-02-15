// ---- Потомки элементов ----
// Найдите первого потомка этого элемента
// и сделайте его текст красного цвета.
let elem = document.querySelector("#elem");
elem.firstElementChild.style.color = "red";

// Найдите последнего потомка этого элемента
// и сделайте его текст красного цвета.
elem.lastElementChild.style.color = "red";

// Найдите всех потомков этого элемента
// и добавьте им в конец текст '!'.
let elems = elem.children;
for (let elem of elems) {
  elem.textContent += "!";
}


// ---- Потомки элементов ----
// Найдите его родителя 
// и задайте ему красную границу.
let elem1 = document.querySelector('#elem1');
elem1.parentElement.style.border = '1px solid red';


// ---- Поиск всех родителей ----
// Найдите ближайшего родителя этого элемента, 
// являющегося тегом div.
let elem2 = document.querySelector('#elem2');
console.log(elem2.closest('div'))

// Найдите ближайшего родителя этого элемента,
// являющегося элементом с классом www.
let elem3 = document.querySelector('#elem3');
console.log(elem3.closest('.www'));


// ---- Поиск всех родителей ----
// Найдите его соседа сверху и добавьте ему в конец текст '!'.
let elem4 = document.querySelector('#elem4');
elem4.previousElementSibling.textContent += '!';

// Найдите его соседа снизу и добавьте ему в конец текст '!'.
elem4.nextElementSibling.textContent += '!';

// Найдите его соседа снизу его соседа снизу 
// (следующий элемент за соседним) и добавьте ему в конец текст '!'.
elem4.nextElementSibling.nextElementSibling.textContent += '!';

// Поменяйте местами текст его соседа 
// сверху и текст его соседа снизу.
let elem5 = document.querySelector('#elem5');
[elem5.previousElementSibling.textContent, elem5.nextElementSibling.textContent] = [elem5.nextElementSibling.textContent, elem5.previousElementSibling.textContent]