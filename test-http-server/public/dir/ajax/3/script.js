let form = document.querySelector('form');

let input1 = document.querySelector('[name="num1"]');
let input2 = document.querySelector('[name="num2"]');

form.addEventListener('submit', function(event){
  let searchParams = new URLSearchParams();

  searchParams.set('num1', input1.value);
  searchParams.set('num2', input2.value);

  let path = '/handler/?' + searchParams.toString();

  fetch(path).then(
    response => {
      return response.text();
    }
  ).then(text => {console.log(text)})

  event.preventDefault();
})
