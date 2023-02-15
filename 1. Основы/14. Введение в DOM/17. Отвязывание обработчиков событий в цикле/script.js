// Даны абзацы. По нажатию на любой из абзацев 
// добавьте ему в конец восклицательный знак.
// Сделайте так, чтобы это добавление происходило 
// лишь по первому нажатию.
let elems = document.querySelectorAll('p');

for (let elem of elems) {
  elem.addEventListener('click', func);
}

function func() {
  this.textContent += '!';
  this.removeEventListener('click', func);
}