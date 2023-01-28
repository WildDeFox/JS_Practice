// Напишите функцию, которая параметром будет принимать число 
// и делить его на 2 столько раз, пока результат не станет меньше 10. 
// Пусть функция возвращает количество итераций, 
// которое потребовалось для достижения результата.
function division (num) {
  let counter = 0;
  while(num > 10) {
    num = num / 2;
    counter++;
  }
  return counter;
}

console.log(division(10000));