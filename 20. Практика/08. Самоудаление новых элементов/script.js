// Сделайте так, чтобы по клику на кнопку в список
// добавлялся новый элемент. Сделайте так, чтобы
// любая li удалялась по клику на нее. Речь идет
// как о тех li, которые уже есть в списке, так
// о новых, созданных после нажатия на кнопку.
let parent = document.querySelector("#parent");
let button = document.querySelector("#button");
let count = parent.lastElementChild.textContent;

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = +count + 1;
  count++;
  parent.appendChild(li);
  let lis = document.querySelectorAll("#parent li");
  for (let li of lis) {
    li.addEventListener("click", function () {
      this.remove();
    });
  }
});
