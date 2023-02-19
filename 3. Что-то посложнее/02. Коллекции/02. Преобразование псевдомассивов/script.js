// Каким-нибудь способом получите псевдомассив элементов.
// Преобразуйте его в массив тремя описанными способами.
let elems = document.querySelectorAll('p');

// Первый способ
let arr = [];
for(let elem of elems) {
  arr.push(elem)
}
console.log(arr);

// Второй способ
let arr1 = [...elems];
console.log(arr1);

// Третий способ
let arr2 = Array.from(elems);
console.log(arr2)