// Напишите функцию, которая параметром будет
// принимать массив и возвращать этот массив без дублей.
function delDub(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let arr = [1, 2, 2, 3, 4, 5, 6, 5, 6];
console.log(delDub(arr));


// Даны абзацы и кнопка. Пользователь кликает
// на эти абзацы в произвольном порядке.
// Сделайте так, чтобы по нажатию на кнопку
// в конец каждого абзаца, на который был совершен
// клик, был добавлен восклицательный знак.
let elems = document.querySelectorAll('p')
let button = document.querySelector('button');

let set = new Set;

for(let elem of elems) {
  elem.addEventListener('click', function() {
    set.add(this);
  })
}

button.addEventListener('click', function() {
  for (let elem of set) {
    elem.textContent = elem.textContent + '!'
  }
})
