// Дан инпут. По получению фокуса запишите в него число 1,
// а по потери фокуса - число 2.
let input = document.querySelector(".input");
input.addEventListener("focus", function () {
  input.value = 1;
});

input.addEventListener("blur", function () {
  input.value = 2;
});


// Дан инпут. Пусть в него вводится число. По потери фокуса
// выведите на экран квадрат этого числа.
let input2 = document.querySelector(".input2");
input2.addEventListener("blur", function () {
  input2.value = input2.value ** 2;
});



// Дан инпут, в котором изначально есть какой-то текст. 
// По получению фокуса инпутом очистите содержимое этого инпута.
let input3 = document.querySelector('.input3');
input3.addEventListener('focus', function() {
  input3.value = ''
})