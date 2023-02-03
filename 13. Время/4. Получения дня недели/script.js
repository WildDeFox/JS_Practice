// Выведите на экран номер текущего дня недели.
let date = new Date();
console.log(date.getDay());

// Определите, является ли текущий день недели выходным или рабочим днем.
if (date.getDay() != 0 || date.getDay() != 6) {
  console.log("Сегодня рабочий день!");
} else {
  console.log("Сегодня выходной!!!");
}


