let tds = document.querySelectorAll('#table td');
let button = document.querySelector('.button1');

button.addEventListener('click', function() {
  for(let td of tds) {
    td.textContent *= 2
  }
})
