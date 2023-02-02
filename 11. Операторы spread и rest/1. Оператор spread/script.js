// Дан массив:

let arr = [1, 2, 3, 4, 5];
// Дана также функция:

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
// Найдите с помощью приведенной функции сумму элементов массива.
console.log(func(...arr))


// Дан массив с числами. Используя Math.min и spread 
// выведите на экран минимальное значение массива.
console.log(Math.min(...arr));