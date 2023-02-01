function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

// Дан массив с числами.
// С помощью созданной нами функции each увеличьте каждый элемент в два раза.
let arr = [1, 2, 3, 4, 5];
let result = each(arr, function (num) {
  return num * 2;
});
console.log(result);

// Дан массив со строками.
// С помощью созданной нами функции each переверните
// символы каждой строки в обратном порядке.
let arrStr = ["привет", "мир", "как", "дела"];
function reverStr(str) {
  return str.split("").reverse().join('');
}
console.log(each(arrStr, reverStr));


// Дан массив со строками. 
// С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
function toUpp(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(each(arrStr, toUpp))


// С помощью следующей функции возведите все элементы массива в куб:
function cube(num) {
	return num ** 3;
}
console.log(each(arr, cube));
