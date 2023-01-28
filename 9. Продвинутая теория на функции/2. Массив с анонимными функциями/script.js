// Сделайте массив arr с тремя функциями. 
// Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
  function() {return 1},
  function() {return 2},
  function() {return 3}
];

// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
console.log(arr[2]());

// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
console.log(arr[0]() + arr[1]() + arr[2]());

// Переберите созданный вами массив arr циклом 
// и выведите результаты работы всех функций в консоль.
for (let elem of arr) {
  console.log(elem());
}