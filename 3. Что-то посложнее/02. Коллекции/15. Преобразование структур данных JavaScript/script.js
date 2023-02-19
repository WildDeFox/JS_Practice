// Дан следующий массив:
// Преобразуйте этот массив в формат JSON.
let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
let json = JSON.stringify(arr)
console.log(json);

let lis = document.querySelectorAll('li');
let arr1 = []
for (let li of lis) {
  arr1.push(li.textContent)
}

let json1 = JSON.stringify(arr1);
console.log(json1);