// Дан массив. Вставьте элементы этого массива
//  в конец ul так, чтобы каждый элемент стоял в своем li.
let parent = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;

  // Модифицируйте предыдущую задачу так, чтобы 
  // по клику на li ей в конец добавлялся '!'.
  li.addEventListener('click', function func() {
    li.textContent += '!';

    // Модифицируйте предыдущую задачу так, чтобы
    // по повторное нажатие на li не приводило к
    //  добавлению второго '!'.
    li.removeEventListener('click', func)
  })

  parent.appendChild(li);
}
