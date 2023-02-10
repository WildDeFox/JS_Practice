// Дан текстареа и абзац. По потери фокуса 
// в текстареа запишите его текст в абзац.
let textarea = document.querySelector('#textarea');
let elem = document.querySelector('#elem')

textarea.addEventListener('blur', function() {
  elem.textContent = textarea.value;
})