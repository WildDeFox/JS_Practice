// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
let str = 'abcde';
console.log(str.indexOf('c'));

// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
function findStr (str, symbol) {
  let result = str.indexOf(symbol);
  if (result == - 1) {
    console.log('К сожелению данного символа нет в строке.');
  } else if (result == 0) {
    console.log('С данного символа начинается строка.')
  } else if (result == str.length - 1) {
    console.log('Данныем символом строка заканчивается.')
  } else{
    console.log('Данный символ есть в строке, он находится на позиции: ' + result)
  }
}
let str1 = 'http://google.com.html';
findStr(str1, 'html')