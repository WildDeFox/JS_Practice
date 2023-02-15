// Дан инпут. По получению фокуса этим инпутом
// запишите в него число 1, а по потери фокуса
// - число 2. Для обращения у инпуту внутри
// функции-обработчика используйте объект this.
let input = document.querySelector(".input");
input.addEventListener("focus", function () {
  this.value = 1;
});

input.addEventListener("blur", function () {
  this.value = 2;
});


// Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку 
// ее значение каждый раз увеличивалось на единицу.
let button = document.querySelector('.button');
button.addEventListener('click', function() {
  this.textContent = +this.textContent + 1
})
