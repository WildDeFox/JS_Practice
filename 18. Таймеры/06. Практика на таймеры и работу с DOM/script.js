// Пусть в инпуте в атрибуте value изначально записано
// число 10. Запустите таймер, который каждую секунду
// будет уменьшать это число на единицу.
let elem = document.querySelector('.elem');

let timerId = setInterval(function(){
  elem.value = Number(elem.value) - 1;

  if (Number(elem.value) == 0) {
    clearInterval(timerId);
  }
},1000)