function loadImage(path) {
  return new Promise(function (resolve, reject) {
    let image = document.createElement("img");
    image.src = path;

    image.addEventListener("load", function () {
      resolve(image);
    });

    image.addEventListener("error", function () {
      reject(new Error('image "' + path + '" load error'));
    });
  });
}

let arrPath = ["img.png", "img2.png"];
let promises = [];

for (let path of arrPath) {
  promises.push(loadImage(path));
}

Promise.all(promises)
  .then(function (images) {
    for (let img of images) {
      let parent = document.querySelector("#parent");
      parent.appendChild(img);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// loadImage("img.png")
//   .then(function (result) {
//     let parent = document.querySelector("#parent");
//     parent.appendChild(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// window.addEventListener('DOMContentLoaded', function() {
// 	console.log('dom загружен');
// });

let prom = new Promise(function(resolve){
  window.addEventListener('DOMContentLoaded', function(){
    resolve()
  })
})

prom.then(function(){
  console.log('dom загружен')
})