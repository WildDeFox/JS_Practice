// Дана пустая HTML таблица. С помощью двух вложенных
// циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
let table = document.querySelector('#parent');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = 'x'
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

// Модифицируйте предыдущую задачу так,
// чтобы таблица создавалась размером 10 рядов на 5 колонок.

// Модифицируйте предыдущую задачу так,
// чтобы в каждую td добавлялся текст 'x'.

// Реализуйте генератор таблиц, ширина и
// высота таблиц задается в двух инпутах
// (например, таблица 5 на 10 ячеек).
let table1 = document.querySelector('.paren1');
let widthTable = document.querySelector('.input1');
let heightTable = document.querySelector('.input2');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  for(let i = 0; i < +heightTable.value; i++) {
    let tr = document.createElement('tr');

    for(let j = 0; j < +widthTable.value; j++) {
      let td = document.createElement('td');
      td.textContent = 'y';

      tr.appendChild(td);
    }

    table1.appendChild(tr)
  }
})