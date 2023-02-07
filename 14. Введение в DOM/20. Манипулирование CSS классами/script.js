// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.
let elem = document.querySelector('#elem');
console.log(elem.classList);


// Переберите в цикле его классы.
for (let elemz of elem.classList) {
  console.log(elemz)
}


// Дан элемент:
// <p id="elem1" class="www ggg zzz"></p>
// Добавьте ему класс xxx.
let elem1 = document.querySelector('#elem1');
elem1.classList.add('xxx');


// Удалите у него класс www и класс zzz.
elem1.classList.remove('zzz');


// Проверьте наличие у него класса ggg.
elem1.classList.contains('ggg');


// Дан элемент. Добавьте ему класс www, 
// если его нет и удалите - если есть.
if (elem1.classList.toggle('www')) {
  elem1.classList.remove('www');
} else {
  elem.classList.add('www');
}
console.log(elem1)