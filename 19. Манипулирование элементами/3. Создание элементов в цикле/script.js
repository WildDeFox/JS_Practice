// Дан пустой ul. Запустите цикл, который вставит в него 10
// тегов li. Сделайте так, чтобы текстом каждой li был ее
// порядковый номер.
let parent = document.querySelector('#parent');

for(let i = 1; i < 11; i++) {
  let li = document.createElement('li');
  li.textContent = i;
  parent.appendChild(li)
}