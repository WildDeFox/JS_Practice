// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 10;

if (day >= 1 && day <= 10) {
  console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
  console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Некоректное значение");
};