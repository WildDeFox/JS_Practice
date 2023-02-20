// Даны инпуты и кнопка. По нажатию на кнопку получите тексты
// всех инпутов в виде массива и сохраните этот массив в
// локальное хранилище.
let inputs = document.querySelectorAll('input');
let button = document.querySelector('#button');
let arr = [];

button.addEventListener('click', function() {
  for (let input of inputs) {
    arr.push(input.value);
    input.value = ''
  }
  localStorage.setItem('inputValue', JSON.stringify(arr))
})

let inputDate = localStorage.getItem('inputValue');

if (inputDate) {
  let now = JSON.parse(inputDate);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = now[i]
  }
}