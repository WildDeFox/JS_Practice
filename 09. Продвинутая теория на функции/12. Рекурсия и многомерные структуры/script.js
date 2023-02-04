// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
function echoLok (obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      echoLok(obj[key]);
    } else {
      console.log(key + ': ' + obj[key])
    }
  }
}

echoLok(obj);


// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. 
// Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

// РАБОТАЕТ НЕКОРРЕКТНО
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
function echoArr (arr) {
  let result = [];
  for (let elem of arr) {
    if (typeof elem == 'object') {
      echoArr(elem);
    } else {
      result.push(elem);
    }
  }
  return result;
}
console.log(echoArr(arr))