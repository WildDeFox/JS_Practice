// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr = [1, 2, 3, 4, 5];
console.log(arr.every(elem => elem > 0));


// Дан массив с числами. Проверьте то, что для всех элементов 
// произведение их значений на их порядковый номер меньше 30.
console.log(arr.every((elem, index) => elem * index < 30))