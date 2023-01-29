// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), 
// вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. 
// Найдите сумму результатов этих функций.
function func1 () {
  return function () {
    return 1;
  }
}

function func2 () {
  return function () {
    return 2;
  }
}

console.log(func1()() + func2()());

// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func () {
  return function () {
    return function () {
      return function () {
        return function () {
          return '!'
        }
      }
    }
  }
}
console.log(func()()()()());


// Сделайте функцию func, которая будучи вызвана вот так: func3(2)(3)(4), 
// вернет сумму переданных в параметры чисел.
function func3 (num) {
  return function (num1) {
    return function (num2) {
      return num + num1 + num2;
    }
  }
}
console.log(func3(2)(3)(4))


// Сделайте функцию func4, которая будучи вызвана вот так: func4(2)(3)(4)(5)(), 
// вернет массив переданных в параметры чисел.
function func4 (num) {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return function () {
          let arr = [];
          arr.push(num, num1, num2, num3);
          return arr;
        }
      }
    }
  }
}
console.log(func4(2)(3)(4)(5)())