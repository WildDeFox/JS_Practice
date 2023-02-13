// Дан див. Запустите цикл, который добавит в наш
// див 5 инпутов. Пусть дан также абзац. Сделайте так,
// чтобы каждый из новых инпутов по потери фокуса записывал
// свой текст в абзац.
let parent = document.querySelector('#parent');
let elem = document.querySelector('.elem');

for(let i = 1; i < 6; i++) {
  let input = document.createElement('input');

  input.addEventListener('blur', function() {
    elem.textContent = this.value;
  })

  parent.appendChild(input)
}