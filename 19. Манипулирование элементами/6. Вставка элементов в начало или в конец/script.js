// Дан ul:
// Вставьте ему в начало элемент с текстом 'start', 
// а в конец - элемент с текстом 'finish'.
let elem = document.querySelector('#elem');

let li = document.createElement('li');
let li1 = document.createElement('li');
li.textContent = 'start';
li1.textContent = 'finish';
elem.prepend(li);
elem.append(li1)


//Вставьте перед этим элементом элемент с текстом 'new'.
let parent = document.querySelector('#parent');
let befor = document.querySelector('#elem1');

let li2 = document.createElement('li');
li2.textContent = 'new';
li2.addEventListener('click', function() {
  li2.textContent += '!';
})
parent.insertBefore(li2, befor)
