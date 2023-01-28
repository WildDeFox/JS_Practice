// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function sumArr(arr) {
  let sumArr = 0;
  for (let elem of arr) {
    sumArr += elem;
  }
  return sumArr;
}

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function divisor(num) {
  let arr = [];
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function arrSymbol(str) {
  return str.split("");
}

// Сделайте функцию, которая параметром будет принимать строку
// и переворачивать ее символы в обратном порядке.
function strReverse(str) {
  return str.split("").reverse().join("");
}

// Сделайте функцию, которая параметром будет принимать строку и
// делать заглавной первую букву этой строки.
function strUpper(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// Сделайте функцию, которая параметром будет принимать строку
// и делать заглавной первую букву каждого слова этой строки.
function strToUpp(str) {
  let arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].slice(1);
  }
  return arrStr.join(" ");
}

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function generateArr(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

// Сделайте функцию, которая будет возвращать случайный элемент из массива.
function getRandomNum(arr) {
  let min = 0;
  let max = arr.length;
  return Math.floor(Math.random() * (max - min)) + min;
}
let newArr = generateArr(10);
console.log(getRandomNum(newArr));

// Сделайте функцию, которая будет проверять пару чисел на дружественность.
// Дружественные числа - два числа, для которых сумма всех собственных
// делителей первого числа равна второму числу и наоборот,
// сумма всех собственных делителей второго числа равна первому числу.

// Сначало сделаем вспомогательную функцию, которая будет находить сумму делителей
function divisorNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum;
}

function frendNum(num1, num2) {
  let d_num1 = divisorNum(num1)
  let d_num2 = divisorNum(num2)
  if (num1 == d_num2 && num2 == d_num1) {
    return true
  } else {
    return false
  }
}


// Используя созданную вами функцию из предыдущей задачи 
// найдите все пары дружественных чисел в промежутке от 1 до 1000.
function frend () {
  let frendArr = []
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
      if ((i !== j) && frendNum(i, j)) {
        frendArr.push(`${i} and ${j}`)
      }
    }
  }
  return frendArr;
}
