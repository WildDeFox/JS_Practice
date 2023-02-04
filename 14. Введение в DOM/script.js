// Даны 3 абзаца:
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную
// переменную и выведите содержимое каждой
// из этих переменных в консоль.
let elem1 = document.querySelector('#elem1');
console.log(elem1);

let elem2 = document.querySelector('#elem2');
console.log(elem2);

let elem3 = document.querySelector('#elem3');
console.log(elem3);


// Дан следующий HTML:
//  <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.
let block = document.querySelector('#block p');
console.log(block);


// Дан следующий HTML:

// <div class="block">
// 	<p>1</p>
//	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.
let block1 = document.querySelector('.block p');
console.log(block1);