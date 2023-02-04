// реализуйте счетчик вызова функции, работающий на замыканиях.
function count() {
  let count = 1;

  return function () {
    console.log(count);
    count++;
  };
}

// Пусть функция в замыкании хранит число 10.
// Сделайте так, чтобы каждый вызов функции уменьшал
// это число на 1 и выводил в консоль уменьшенное число.
// function func () {
//   let count = 10;
//   return function () {
//     console.log(count);
//     count--;
//   }
// }

// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0,
// а затем каждый последующий вызов функции выводил в консоль
// сообщение о том, что отсчет окончен.
function func() {
  let count = 10;
  return function () {
    if (count <= 0) {
      console.log("Отсчет окончен");
    } else {
      console.log(count);
      count--;
    }
  };
}
