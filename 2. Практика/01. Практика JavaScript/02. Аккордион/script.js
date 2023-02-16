let divs = document.querySelectorAll('div');
let links = document.querySelectorAll('.link');

for (let link of links) {
  link.addEventListener('click', function() {
    let active = link.closest('.active')
    if (active != null) {
      active.classList.remove('active')
    } else {
      let actEl = document.querySelector('.active')
      if (actEl != null) {
        actEl.classList.remove('active');
      }
      let div = link.closest('.tab');
      div.classList.add('active');
      
    }
    
  })
}