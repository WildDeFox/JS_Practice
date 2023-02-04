// Дана строка 'я учу javascript!'. 
// Вырежьте из нее слово 'учу' и слово 'javascript' 
// двумя разными способами (через substring, slice).
let str = 'я учу javascript!';
console.log(str.substring(2, 5) + ' ' + str.substring(6, 16));
console.log(str.slice(2, 5) + ' ' + str.slice(6, -1));