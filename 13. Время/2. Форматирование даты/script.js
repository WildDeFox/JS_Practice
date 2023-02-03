// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Используйте для всех частей даты (кроме года)
// созданную нами функцию для добавления нуля при необходимости.
let date = new Date();

function addZero(num) {
  if (num >= 1 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
let data = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
console.log(time + ' ' + data);
