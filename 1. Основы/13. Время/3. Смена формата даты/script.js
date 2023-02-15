// Дана дата в формате год-месяц-день. 
// Преобразуйте эту дату в формат день.месяц.год.
let data = '2023-02-03';
let newData = data.split('-').reverse().join('.')
console.log(newData);