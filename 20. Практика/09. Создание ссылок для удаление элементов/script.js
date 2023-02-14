let parent = document.querySelector('#parent');
let lis = document.querySelectorAll('#parent li');

for(let li of lis) {
  let a = document.createElement('a');
  a.href = '';
  a.textContent = 'Удалить';
  li.appendChild(a);

  a.addEventListener('click', function(event) {
    li.remove();
    event.preventDefault()
  })
}