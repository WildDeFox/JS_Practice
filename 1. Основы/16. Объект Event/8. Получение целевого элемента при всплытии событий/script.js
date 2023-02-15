// Навешайте на див обработчик клика. В этом обработчике
// определите, в каком из тегов сработало событие.
let div = document.querySelector('div');

div.addEventListener('click', function(e) {
  if (e.target.matches('div')) {
    console.log('Клик по диву')
  }

  if (e.target.matches('ul')) {
    console.log('Клик по списку');
    e.target.innerHTML += '<li>Новый элемент</li>'
  }

  if (e.target.matches('li')) {
    console.log('Клик по элементу списка');
    e.target.textContent += '!'
  }
})


// Модифицируйте предыдущую задачу. Сделайте так, 
// чтобы при клике на li, ей в конец добавлялся
// восклицательный знак, а при клике на ul - ей в конец 
// добавлялась новая li.