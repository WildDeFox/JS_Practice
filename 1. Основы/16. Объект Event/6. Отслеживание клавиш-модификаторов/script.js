// Дан элемент. Сделайте так, чтобы по клику 
// на него он красился в красный цвет, но только 
// если в момент клика нажата клавиша Alt.
let elem = document.querySelector('.elem');

elem.addEventListener('click', function(e) {
  if (e.altKey) {
    this.style.backgroundColor = 'red'
  }
})


// Сделайте так, чтобы по клику на любую li, 
// в конец ее текста добавлялось число 1, 
// если нажата клавиша Ctrl, и число 2, если 
// нажата клавиша Shift.
let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', function(e) {
  if(e.ctrlKey) {
    e.target.textContent += ' 1';
  } else if(e.shiftKey) {
    e.target.textContent += ' 2';
  }
})