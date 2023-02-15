// Пусть дана переменная, в которой изначально 
// хранится число 100. Даны также две кнопки.
// По нажатию на первую кнопку запустите таймер, 
// который каждую секунду будет уменьшать значение 
// переменной на 1 и выводить новое значение в консоль.
// Как только значение переменной достигнет нуля
// - остановите таймер.

// По нажатию на вторую кнопку остановите таймер.
// Также остановите таймер, если вторая кнопка не
// была нажата, но значение переменной достигло нуля.
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let counter = 100;
let timeId;

start.addEventListener('click', func)

function func() {
  timeId = setInterval(function() {
    console.log(counter);
    counter--;

    if (counter == 0) {
      clearInterval(timeId)
    }

  },1000)
  this.removeEventListener('click', func)
}

stop.addEventListener('click', function() {
  clearInterval(timeId);
  start.addEventListener('click', func)
})