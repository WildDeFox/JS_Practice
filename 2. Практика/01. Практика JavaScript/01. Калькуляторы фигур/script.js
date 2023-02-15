// Сделайте калькулятор, который будет находить площадь
// и периметр квадрата.

let input1 = document.querySelector('.input1'); // сторона квадр
let elem1 = document.querySelector('.elem1');
let elem1_1 = document.querySelector('.elem1_1');

input1.addEventListener('blur', function() {
  elem1.textContent += +this.value * 2;
  elem1_1.textContent += +this.value * 4;
})


// Сделайте калькулятор, который будет находить
// площадь и периметр прямоугольника.
let input2 = document.querySelector('.input2');
let input2_1 = document.querySelector('.input2_1');
let elem2 = document.querySelector('.elem2');
let elem2_1 = document.querySelector('.elem2_1');
let button2 = document.querySelector('.button2')

button2.addEventListener('click', function(){
  elem2.textContent += +input2.value * +input2_1.value;
  elem2_1.textContent += 2 * (+input2.value + +input2_1.value);
})


// Сделайте калькулятор, который будет
// находить площадь круга и длину окружности.
let input3 = document.querySelector('.input3');
let elem3 = document.querySelector('.elem3');
let elem3_1 = document.querySelector('.elem3_1');
const PI = 3.14;

input3.addEventListener('blur', function() {
  elem3.textContent += ((PI * +input3.value) ** 2).toFixed(1);
  elem3_1.textContent += (2 * PI * +input3.value).toFixed(1);
})