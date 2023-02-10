// Сделайте выпадающий список с названиями месяцев. 
// Сделайте так, чтобы JavaScript по умолчанию выбирал
// в этом списке текущий месяц.
let select = document.querySelector('.select');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  select.value = 'Февраль'
})