// Сделайте кнопку, по нажатию на которую в консоль
// будет выводится обратный отсчет, начиная с 100.
let button = document.querySelector('.button');

button.addEventListener('click', function func() {
  let count = 100;

  let timerId = setInterval(function(){
    console.log(count);
    count--;
    if (count == 0) {
      clearInterval(timerId);
    }
  }, 1000)

  this.removeEventListener('click', func)
})