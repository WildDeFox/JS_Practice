// Выведите на экран количество дней, 
// прошедшее между 1 марта 1988 года и 10 января 2000 года.
let date1 = new Date(1988, 3, 1);
let date2 = new Date(2000, 1, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60)) // минуты
console.log(diff / (1000 * 60 * 60)) // часы
console.log(diff / (1000 * 60 * 60 * 24)) // дни


// Выведите на экран количество месяцев, 
// прошедшее между вашим рождением и текущим моментом времени.
let date11 = new Date(2023, 2, 3);
let date22 = new Date(1998, 12, 24);
let diff1 = date11.getTime() - date22.getTime();

console.log(diff1 / (1000 * 60 * 60 * 24))
console.log(diff1 / (1000 * 60 * 60 * 24 * 7))