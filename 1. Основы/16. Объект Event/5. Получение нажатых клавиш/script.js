// Сделайте инпут, который будет по вводу выводить значения
// введенных клавиш и их коды.
let input = document.querySelector('.input')

input.addEventListener('keypress', function(event) {
  console.log(event.key)
})


// Дан абзац и инпут. В него вводится текст и нажимается 
// клавиша Enter. Сделайте так, чтобы в этот момент 
// введенный текст попадал в абзац под инпутом,
// а содержимое инпута очищалось.
let input1 = document.querySelector('.input1');
let elem = document.querySelector('.elem');

input1.addEventListener('keypress', function(e) {
  if(e.key == 'Enter') {
    elem.textContent = this.value;
    this.value = ''
  }
})