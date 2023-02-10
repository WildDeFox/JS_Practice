// Даны 3 радиокнопки, абзац и кнопка. По клику на
// кнопку выведите в абзац value отмеченной радиокнопки.
let radios = document.querySelectorAll("input");
let p = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  for (let radio of radios) {
    if (radio.checked) {
      p.textContent = radio.value;
    }
  }
});
