setTimeout(function () {
  let arr = [1, 2, 3, 4, 5]; // массив с результатом
  func1(arr);
  func2(arr);
  func3(arr);
  func4(arr);
}, 3000);

function func1(arr) {
  // выведем в #message сообщение о том, что данные получены
  let message = document.querySelector("#message");
  if (arr) {
    message.textContent = "Данные получены";
  }
}

function func2(arr) {
  // добавим в #list элементы массива в качестве тегов li
  let list = document.querySelector("#list");
  for (elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;
    list.appendChild(li);
  }
}

function func3(arr) {
  // выведем в #amount количество элементов в массиве
  let amount = document.querySelector("#amount");
  amount.textContent = arr.lenght;
}

function func4(arr) {
  // выведем в #result сумму элементов массива
  let result = document.querySelector("#result");
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  result.textContent = sum;
}
