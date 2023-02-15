// Выведите на экран HTML таблицу размером
// 5 рядов на 5 колонок так, чтобы в ее
// ячейках последовательно стояли числа от 1 до 25.
let table = document.querySelector('table');
let count = 1;

for(let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');

  for(let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = count;
    count++;
    tr.appendChild(td);
  }

  table.appendChild(tr)
}