// Даны инпуты. Переберите эти инпуты циклом и создайте
// коллекцию Map, ключами в которой будут инпуты,
// а значением - их порядковый номер на странице.
// Сделайте так, чтобы по клику на любой инпут ему
// в value записывался его порядковый номер.
let inputs = document.querySelectorAll('input');

let map = new Map;

let number = 1;
for(let input of inputs) {
  map.set(input, number++);
}

for (let input of inputs) {
  input.addEventListener('click', function(){
    this.value = map.get(input)
  })
}


// Даны инпуты. В каждый инпут можно ввести число.
// Пусть по нажатию на Enter инпут запоминает введенное
// число. Сделайте так, чтобы по потери фокуса в инпуте
// в консоль выводился массив всех введенных ранее в инпут чисел.
let inputs1 = document.querySelectorAll('#parent input');

let map1 = new Map;
let arr = []

for (let input of inputs1) {
  input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      map1.set(input, input.value)
      this.value = ''
    }
  })

  input.addEventListener('blur', function() {
    console.log(values)
  })
}

let values = map1.values()