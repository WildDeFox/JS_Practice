let subsribers = {};

function on(name, callback) {
  if (!subsribers[name]) {
    subsribers[name] = [];
  }

  subsribers[name].push(callback);
}

function emit(name, data) {
  if (subsribers[name]) {
    for (let callback of subsribers[name]) {
      callback(data);
    }
  }
}

setTimeout(function () {
  emit("loaded", [1, 2, 3, 4, 5]);
}, 3000);

on("loaded", function (arr) {
  // выведем в #message сообщение о том, что данные получены
  let message = document.querySelector("#message");
  if (arr) {
    message.textContent = "Данные получены";
  }
});

on("loaded", function (arr) {
  // добавим в #list элементы массива в качестве тегов li
  let list = document.querySelector("#list");
  for (elem of arr) {
    let li = document.createElement("li");
    li.textContent = elem;
    list.appendChild(li);
  }
});

on("loaded", function (arr) {
  // выведем в #amount количество элементов в массиве
  let amount = document.querySelector("#amount");
  amount.textContent = arr.lenght;
});

on("loaded", function (arr) {
  // выведем в #result сумму элементов массива
  let result = document.querySelector("#result");
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  result.textContent = sum;
});
