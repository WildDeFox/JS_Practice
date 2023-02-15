let lis = document.querySelectorAll('#parent li')

for(let li of lis) {
  li.addEventListener('click', function func(){
    let input = document.createElement('input');

    input.value = li.textContent;
    li.textContent = '';
    li.appendChild(input);

    input.addEventListener('blur', function(){
      li.textContent = this.value;
      li.addEventListener('click', func)
    })

    li.removeEventListener('click', func)
  })
}