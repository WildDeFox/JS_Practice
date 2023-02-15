// Дан инпут и кнопка. По нажатию на кнопку запишите 
// в инпут какой-нибудь текст.
let input = document.querySelector('.input');
let button = document.querySelector('.button');
button.addEventListener('click', function() {
  input.value = 'Привет мир'
})


// Дан инпут, абзац и кнопка. По нажатию на 
// кнопку запишите в абзац текст из инпута.
let input1 = document.querySelector('.input1');
let elem1 = document.querySelector('.elem1');
let button1 = document.querySelector('.button1');
button1.addEventListener('click', function() {
  elem1.textContent = input1.value
})


// Даны два инпута и кнопка. В первый инпут 
// пользователем вводится число. По нажатию 
// на кнопку запишите во второй инпут квадрат введенного числа.
let input2_1 = document.querySelector('.input2_1');
let input2_2 = document.querySelector('.input2_2');
let button2 = document.querySelector('.button2');
button2.addEventListener('click', function() {
  input2_2.value = input2_1.value ** 2
})


// Даны два инпута и кнопка. По нажатию на кнопку
// запишите в первый инпут значение второго инпута,
// а во второй инпут - значение первого. 
// Ваш код должен работать универсально, для любых значений инпутов.
let input3_1 = document.querySelector('.input3_1');
let input3_2 = document.querySelector('.input3_2');
let button3 = document.querySelector('.button3');
button3.addEventListener('click', function() {
  [input3_1.value, input3_2.value] = [input3_2.value, input3_1.value]
})

