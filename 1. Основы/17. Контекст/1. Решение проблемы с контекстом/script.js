// Первый способ 
// Записываем this в отдельную переменную
let elem = document.querySelector('#elem');

elem.addEventListener('blur', func);

function func() {
  let self = this;
  alert(square())

  function square() {
    return +self.value * +self.value
  }
}


// Второй способ
// Передаем this параметром в функцию
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', parent)

function parent () {
  child(this);

  function child(param) {
    console.log(param.value * param.value)
  }
}


// Третий способ
// Используем стрелочную функцию
let elem0 = document.querySelector('#elem0');
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('blur', func3);

function func3 () {
  let square3 = () => {
    return +this.value * +this.value
  }

  elem0.textContent = square3();
}