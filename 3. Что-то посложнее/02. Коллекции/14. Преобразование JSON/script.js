// Дана строка в формате JSON, содержащая массив с числами:
// Преобразуйте эту строку в настоящий массив JavaScript
// и найдите сумму чисел этого массива.
let json1 = '[1,2,3,4,5]';
let arr = JSON.parse(json1);
let sum = 0;
for (let elem of arr) {
  sum += elem
}
console.log(sum);


// Дана строка в формате JSON, содержащая объект с данными:
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
// Найдите сумму чисел из представленных данных.
let obj = JSON.parse(json);
console.log(obj);
let sum1 = 0

for (let key in obj) {
  let arrValue = obj[key];

  for (let value of arrValue) {
    sum1 += value;
  }
}

console.log(sum1);


// Дана строка в формате JSON, содержащая имена юзеров:
// Выведите эти имена в виде списка ul.
let json2 = '["user1","user2","user3","user4","user5"]';
let arr2 = JSON.parse(json2);
let parent = document.querySelector('#parent');

for (let elem of arr2) {
  let li = document.createElement('li');
  li.textContent = elem;
  parent.appendChild(li)
}

