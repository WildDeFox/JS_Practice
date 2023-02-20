// Пользователь заходит на сайт, затем обновляет страницу,
// затем еще раз обновляет и так далее. Сделайте счетчик
// обновления страницы. Каждый раз при обновлении выводите
// значение счетчика на экран.
let elem = document.querySelector(".elem");
let count = localStorage.getItem("count");
if (!count) {
  let nowCount = 1;
  localStorage.setItem("count", nowCount);
} else {
  let newNow = Number(localStorage.getItem("count")) + 1;
  localStorage.setItem("count", newNow);
}

elem.textContent += localStorage.getItem("count");
