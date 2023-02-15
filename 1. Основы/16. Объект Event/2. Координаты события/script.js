let elem = document.querySelector('.elem');

document.addEventListener('mousemove', function(event){
  elem.innerHTML = event.clientX + ' : ' + event.clientY
})