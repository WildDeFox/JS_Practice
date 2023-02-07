// Получите этот элемент с помощью метода getElementById 
// и установите ему какой-нибудь текст.
let elem = document.getElementById('elem')
elem.textContent = 'Я тут';


// Получите все теги li по имени тега 
// и сделайте их текст красного цвета.
let lis = document.getElementsByTagName('li');
for(let li of lis) {
  li.style.color = 'red';
};


// Получите эти элементы по имени класса и 
// сделайте их текст красного цвета.
let ps = document.getElementsByClassName('www');
for(let p of ps) {
  p.style.color = 'red'
}