// Выведите объект с событием в консоль. 
// Изучите структуру этого объекта.
let button = document.querySelector('button');

button.addEventListener('click', function(event) {
  console.log(event)
})