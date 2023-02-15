// Дана кнопка. По двойному клику по ней 
// выведите какое-нибудь сообщение.
let button1 = document.querySelector('#button1');

button1.addEventListener('click', function() {
  console.log('Молодец нажал на меня, а ты хорош!');
})


// По наведению на нее выведите какое-нибудь сообщение.
button1.addEventListener('mouseover', function() {
  console.log('Жми, жми, не бойся...')
})


// По уходу курсора с нее выведите какое-нибудь сообщение.
button1.addEventListener('mouseout', function () {
  console.log('Ну куда же ты...')
})