// Дан инпут и абзац. По потери фокуса в инпуте
// запишите значение инпута в конец текста абзаца.
let elem = document.querySelector('.elem');
let input = document.querySelector('.input');

input.addEventListener('blur', function() {
  elem.textContent = input.value;
})


// Дано несколько инпутов, абзац и кнопка. По нажатию 
// на кнопку получите числа, стоящие в этих инпутах и 
// запишите их сумму в абзац.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let elem1 = document.querySelector('.elem1');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function() {
  elem1.textContent = +input1.value + +input2.value
})


// Дан инпут. В него вводится число. 
// По потери фокуса найдите сумму цифр этого числа.
let input3 = document.querySelector('.input3');

input3.addEventListener('blur', function() {
  let nums = String(input3.value).split('');
  let sum = 0;

  for(let num of nums) {
    sum += +num;
  }

  input3.value = sum;
})


// Дан инпут. В него вводятся числа через запятую.
// По потери фокуса найдите среднее арифметическое 
// этих чисел (сумма делить на количество).
let input4 = document.querySelector('.input4');

input4.addEventListener('blur', function() {
  let nums = input4.value.split(',');
  let lenght = nums.length;
  let sum = 0;

  for(let num of nums) {
    sum += +num;
  }

  input4.value = sum / lenght;
})


// Даны 4 инпута. В первый инпут вводится 
// ФИО через пробел. По потери фокуса запишите 
// фамилию, имя и отчество в остальные 3 инпута.
let input5 = document.querySelector('.input5');
let input6 = document.querySelector('.input6');
let input7 = document.querySelector('.input7');
let input8 = document.querySelector('.input8');

input5.addEventListener('blur', function() {
  let strs = input5.value.split(' ');
  input6.value = strs[0];
  input7.value = strs[1];
  input8.value = strs[2];
})


// Дан инпут. В него вводится ФИО через пробел.
// ФИО вводится с маленькой буквы. Сделайте так,
// чтобы по потери фокуса инпутом, введенные фамилия,
// имя и отчество автоматически стали записанными с
// большой буквы (в этом же инпуте).
let input9 = document.querySelector('.input9');

input9.addEventListener('blur', function() {
  let strs = input9.value.split(' ');
  let newStr = []; 

  for(let str of strs) {
    newStr.push(str.slice(0, 1).toUpperCase() + str.slice(1))
  }
  this.value = newStr.join(' ')
});


// Дан инпут. В него вводится текст. По потери
// фокуса узнайте количество слов в этом тексте.
let input10 = document.querySelector('.input10');

input10.addEventListener('blur', function() {
  let strs = input10.value.split(' ');
  this.value = strs.length;
})


// Дан инпут. В него вводится дата в формате 31.12.2016. 
// По потери фокуса в этом же инпуте поставьте эту дату
// в формате 2016-12-31.
let input11 = document.querySelector('.input11');

input11.addEventListener('blur', function() {
  this.value = this.value.split('.').reverse().join('-');
})


// Дан инпут. В него вводится число. 
// Проверьте по потери фокуса, что это 
// число содержит внутри себя цифру 3.
let input12 = document.querySelector('.input12');

input12.addEventListener('blur', function() {
  let nums = this.value.split('');

  for(let num of nums) {
    if (num == 3) {
      this.value = true;
      break;
    } else {
      this.value = false;
    }
  }
})


// Даны ссылки. Добавьте в конец каждой ссылки 
// ее href в круглых скобках.
let links = document.querySelectorAll('.link')

for(let link of links) {
  link.addEventListener('click', function() {
    this.textContent += this.href
  })
}


// Даны несколько абзацев с числами. По нажатию на любой 
// абзац запишите в него квадрат числа, которое в нем находится.
let ps = document.querySelectorAll('.p');

for(let p of ps) {
  p.addEventListener('click', function() {
    this.textContent = (+this.textContent) ** 2
  })
}


// Дан инпут. Реализуйте кнопочки +1, -1, которые будут 
// увеличивать или уменьшать на 1 значение инпута.
// Сделайте так, чтобы это значение не могло стать меньше нуля.
let input15 = document.querySelector('.input15');
let button15 = document.querySelector('.button15');
let button16 = document.querySelector('.button16');

button15.addEventListener('click', function() {
  input15.value++;
})

button16.addEventListener('click', function func() {
  if (input15.value > 0) {
    input15.value--;
  } 
})


// Дан инпут. Даны абзацы. Пусть в этот инпут 
// записывается суммарное количество нажатий по этим абзацам.
let elems16 = document.querySelectorAll('.elem16');
let input16 = document.querySelector('.input16');

for(let elem of elems16) {
  elem.addEventListener('click', function() {
    input16.value++;
  })
}


// На странице есть дивы. В них есть текст. Обойдите
// все дивы и обрежьте тот текст, который в них стоит
// так, чтобы он стал длиной 10 символов. И добавьте
// троеточие в конец обрезанного текста
let divs = document.querySelectorAll('divText');

for(let div of divs) {
  div = div.slice(0, 10) + '...'
}


// Дан инпут. В него вводится число. По потери фокуса 
// проверьте, что в нем лежит число от 1 до 100. 
// Если это так - покрасьте инпут в зеленый цвет, 
// а если не так - в красный.
let input17 = document.querySelector('.input17');

input17.addEventListener('blur', function(){
  if (this.value >= 1 && this.value <= 100) {
    this.style.backgroundColor = "green";
  } else {
    this.style.backgroundColor = 'red'
  }
})
