// Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i < 101; i += 2) {
  res += i;
}
console.log(res)


// Найдите сумму нечетных чисел от 1 до 99.
let res1 = 0;
for (let i = 1; i < 100; i += 2) {
  res1 += i;
}
console.log(res1);


// Найдите произведение целых чисел от 1 до 20.
let res2 = 1;
for (let i = 1; i < 21; i++) {
  res2 *= i;
}
console.log(res2)