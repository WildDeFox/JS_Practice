// Даны инпуты. Сделайте так, чтобы по потери
// фокуса в любом из наших инпутов выполнялась
// приведенная функция.
function func() {
	this.value = Number(this.value) + 1;
}
let inputs = document.querySelectorAll('.input');

for (let input of inputs) {
  input.addEventListener('blur', func);
}


// Даны абзацы с числами. Сделайте так,
// чтобы по клику на любой абзац его число
// в нем возводилось в квадрат.
let texts = document.querySelectorAll('.text');

function sqrt() {
  this.textContent = Number(this.textContent) ** 2;
}

for (let text of texts) {
  text.addEventListener('click', sqrt);
}