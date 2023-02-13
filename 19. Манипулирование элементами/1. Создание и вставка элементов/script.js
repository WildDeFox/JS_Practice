// Вставьте ему в конец li с текстом 'item'.
let elem = document.querySelector('#elem');
let li = document.createElement('li')
li.textContent = 'item';

elem.appendChild(li);

// Сделайте так, чтобы по клику на кнопку
// в конец списка добавлялся li с текстом 'item'.
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  let li1 = document.createElement('li');
  li1.textContent = 'item';
  elem.appendChild(li1)
})