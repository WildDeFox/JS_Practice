// Сделайте так, чтобы по клику на див в
// конец его текста добавилось
// содержимое его атрибута data-text.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//   elem.textContent += elem.dataset.text;
// });

// Сделайте так, чтобы по клику на любой из
// дивов ему в конец записывался его порядковый номер.
let divs = document.querySelectorAll("div");

function func() {
  this.textContent += this.dataset.num;
}

for (let div of divs) {
  div.addEventListener("click", func);
}

// Дана кнопка. Сделайте так, чтобы эта кнопка считала
// количество кликов по ней, записывая их в какой-нибудь
// пользовательский атрибут. Пусть по клику на другую
// кнопку на экран выводится, сколько кликов было сделано
// по первой кнопке.
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let elem = document.querySelector(".elem");

button1.addEventListener("click", function () {
  button1.dataset.count++;
});

button2.addEventListener("click", function () {
  elem.textContent = button1.dataset.count;
});

// В этом инпуте в атрибуте data-length
// содержится количество символов, которое
// нужно ввести в инпут. Сделайте так, чтобы
// по потери фокуса, если количество введенных
// символов не совпадает с заданным,
// выводилось сообщение об этом.
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector(".elem2");
elem1.addEventListener("blur", function () {
  if (elem1.dataset.length == elem1.value.length) {
    elem2.textContent = "Все правильно!";
  } else {
    elem2.textContent = "Введите слово корректной длинны";
  }
});
