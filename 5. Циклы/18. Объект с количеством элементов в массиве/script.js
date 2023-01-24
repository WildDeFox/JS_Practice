// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
let str = 'Привет это тестовая строка';
let obj = {};
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] == undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}
console.log(obj)