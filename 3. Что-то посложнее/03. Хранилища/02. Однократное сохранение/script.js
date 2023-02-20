// По заходу пользователя на сайт запишите в локальное
// хранилище текущий момент времени. Затем по повторному
// заходу выведите, сколько прошло времени с предыдущего
// захода пользователя на сайт.
let parent = document.querySelector("#parent");
let time = localStorage.getItem("time");

if (!time) {
  let now = new Date().getTime();
  localStorage.setItem("time", now);
} else {
  let newTime = new Date().getTime();
  parent.textContent +=
    ((newTime - localStorage.getItem("time")) / (1000 * 60)).toFixed(0) +
    " минут назад.";
  localStorage.setItem("time", newTime);
}


// Дан инпут. По потери фокуса в этом инпуте сохраните
// его значение в локальное хранилище. При следующем
// заходе пользователя на страницу установите в инпуте
// сохраненный ранее текст.
let input = document.querySelector('.input');

input.addEventListener('blur', function() {
  localStorage.setItem('value', input.value);
  this.value = ''
})

input.value = localStorage.getItem('value')
