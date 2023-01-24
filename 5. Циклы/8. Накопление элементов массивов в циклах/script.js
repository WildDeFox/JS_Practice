// Дан массив:
// let arr = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  res += elem;
}
console.log(res)


// Найдите сумму элементов элементов, являющихся четными числами.
let res1 = 0;
for (let elem of arr) {
  if (elem % 2 == 0) {
    res1 += elem;
  }
}
console.log(res1)


// Найдите сумму квадратов элементов этого массива.
let res2 = 0
for (let elem of arr) {
  res2 += elem ** 2;
}
console.log(res2)


// Найдите произведение элементов этого массива.
let res3 = 1;
for (let elem of arr) {
  res3 *= elem;
}
console.log(res3);