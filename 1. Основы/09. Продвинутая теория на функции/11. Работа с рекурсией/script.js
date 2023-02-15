// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива в консоль.
let arr = [1, 2, 3, 4, 5];
function func(arr) {
  console.log(arr.shift(), arr);

  if (arr.length != 0) {
    func(arr)
  }
}
func(arr);

// С помощью рекурсии найдите сумму квадратов элементов этого массива.
function getSqrt(arr) {
	let sqrt = arr.shift() ** 2;

	if (arr.length !== 0) {
		sqrt += getSqrt(arr);
	}
	
	return sqrt;
}
let arr1 = [1, 2, 3, 4, 5]
console.log(getSqrt(arr1));