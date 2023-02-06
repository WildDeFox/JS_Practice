// Дана ссылка и кпнока. По нажатию на кнопку 
// добавьте в конец текста ссылки содержимое 
// ее атрибута href в круглых скобках. 
// Сделайте так, чтобы это добавление происходило 
// лишь по первому нажатию.
let link = document.querySelector('.link');
let button = document.querySelector('.button');

button.addEventListener('click', func);

function func() {
  link.textContent += link.href;
  button.removeEventListener('click', func)
}


// Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку ее 
// значение каждый раз увеличивалось на единицу. 
// После того, как значение кнопки достигнет 10 - 
// отвяжите обработчик события, чтобы кнопка больше 
// не реагировала на нажатие.
let button1 = document.querySelector('.button1');
button1.addEventListener('click', counter);

function counter() {
  if (button1.textContent < 10) {
    button1.textContent++;
  } else {
    button1.removeEventListener('click', counter)
  }
  
} 