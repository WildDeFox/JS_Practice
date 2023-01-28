// Преобразуйте последнюю букву строки в верхний регистр.
let str = 'hello World';
let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result)


// Преобразуйте первые 2 буквы строки в верхний регистр.
let result1 = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result1)


// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.
let str1 = 'London';
let result2 = str1.slice(0, 1).toLowerCase() + str1.slice(1);
console.log(result2);


// Слова в строке
let string = 'world1 world2 world3';
let arr = string.split(' ');

for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}

let resultString = arr.join(' ');
console.log(resultString);


// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа 
// (то есть для строк, в которых слова разделены символов подчеркивания).
let str2 = 'var_test_text';
let arr1 = str2.split('_');

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i].slice(0, 1).toUpperCase() + arr1[i].slice(1);
}

let resStr = arr1.join('_');
console.log(resStr);


// Дана строка со словами. 
// Напишите скрипт, который переставит слова в строке в обратном порядке.
let str3 = '123456789';
let result3 = str3.split('').reverse().join('');
console.log(result3)
