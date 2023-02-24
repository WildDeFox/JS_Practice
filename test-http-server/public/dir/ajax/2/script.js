let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');

let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let reset = document.querySelector('.reset');


button1.addEventListener('click', function() {
  fetch('./1.html').then(response => {
    return response.text()
  }).then(text => {
    div1.innerHTML = text
  })
})

button2.addEventListener('click', function() {
  fetch('./2.html').then(response => {
    return response.text();
  }).then(text => {
    div2.innerHTML = text;
  })
})

button3.addEventListener('click', function() {
  fetch('./3.html').then(response => {
    return response.text();
  }).then(text => {
    div3.innerHTML = text
  })
})

// button1.addEventListener('click', addTextHtml('./1.html', div1));
// button2.addEventListener('click', addTextHtml('./2.html', div2));

// function addTextHtml(src, div) {
//   fetch(src).then(response => {
//     return response.text();
//   }).then(text => {
//     div.innerHTML = text
//   })
// }

reset.addEventListener('click', function() {
  let divs = document.querySelectorAll('div');

  for(let div of divs) {
    div.textContent = ''
  }
})