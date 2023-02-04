// Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));


// Найдите квадратный корень из 245.
console.log(Math.sqrt(245));


// Дан следующий массив:
// Найдите квадратный корень из суммы кубов его элементов. 
// Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let subCub = 0;
for( let elem of arr) {
  subCub += elem ** 3;
}
console.log(Math.sqrt(subCub));
