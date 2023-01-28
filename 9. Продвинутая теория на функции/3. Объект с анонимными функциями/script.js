// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, 
// вторая - число 2, третья - число 3. 
// С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
  func1: function() {return 1},
  func2: function() {return 2},
  func3: function() {return 3},
}
console.log(obj.func1() + obj.func2() + obj.func3());

// Переберите созданный объект циклом и выведите результаты работы функций в консоль.
for (let key in obj) {
  console.log(obj[key]())
}


// Сделайте объект с тремя функциями, 
// каждая из которых будет принимать параметром массив с числами.
// Сделайте так, чтобы первая функция возвращала сумму элементов массива, 
// вторая функция - сумму квадратов, а третья - сумму кубов.
let object = {
  sumArr: function(arr) {
    let sumArr = 0;
    for (let elem of arr) {
      sumArr += elem;
    }
    return sumArr;
  },
  square: function(arr) {
    let sunSquare = 0;
    for (let elem of arr) {
      sunSquare += elem ** 2;
    }
    return sunSquare;
  },
  cube: function(arr) {
    let sumCobe = 0;
    for (let elem of arr) {
      sumCobe += elem ** 3;
    }
    return sumCobe;
  }
}
let arr = [1, 2, 3, 4, 5]
console.log(object.sumArr(arr));