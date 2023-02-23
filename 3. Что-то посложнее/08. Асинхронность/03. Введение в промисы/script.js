let promis = new Promise(function (resolve) {
  setTimeout(function () {
    let result = [1, 2, 3, 4, 5];
    resolve(result);
  }, 3000);
});

promis.then(function (result) {
  console.log(result);
});


let promise = new Promise(function(resolve){
  setTimeout(function(){
    let text = 'This is my first promise';
    resolve(text)
  }, 5000)
})


promise.then(function(text){
  let parent = document.querySelector('#parent');
  parent.textContent = text
})