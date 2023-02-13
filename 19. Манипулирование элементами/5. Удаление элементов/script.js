let lis = document.querySelectorAll('li');

for(let elem of lis) {
  elem.addEventListener('click', function() {
		elem.remove();
	});
}