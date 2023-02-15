// Даны два инпута. Сделайте так, чтобы после ввода
// двух символов фокус ввода переходил ко второму 
// инпуту, а после ввода двух символов в этот инпут 
// - фокус из него убирался.
let input = document.querySelector('.input');
let input1 = document.querySelector('.input1');

input.addEventListener('input', function() {
  if(this.value.length == 2) {
    input1.focus()
  }
})

input1.addEventListener('input', function() {
  if(this.value.length == 2) {
    this.blur()
  }
})

