function loadImage(src, callback) {
  let image = document.createElement("img");
  image.src = src;
  callback(image);
}

loadImage("img.png", function (image) {
  document.body.appendChild(image);
});

loadImage("img2.png", function(image) {
  document.body.appendChild(image)
})
