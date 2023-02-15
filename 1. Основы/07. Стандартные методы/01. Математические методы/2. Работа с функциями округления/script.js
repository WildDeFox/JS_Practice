// Найдите квадратный корень из 379. 
// Результат округлите до целых, до десятых, до сотых.
let num = Math.sqrt(379);
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));


// Найдите квадратный корень из 587. 
// Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let obj = {
  'floor': Math.floor(num),
  'ceil': Math.ceil(num)
}
console.log(obj);
