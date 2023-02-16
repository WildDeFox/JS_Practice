let field = document.querySelector("#field");
let message = document.querySelector("#message");
let button = document.querySelector(".button");
let city = [];

button.addEventListener("click", function () {
  if (city.length == 0) {
    city.push(field.value);
    field.value = "";
  } else {
    for (let cit of city) {
      if (cit == field.value) {
        message.textContent = "Такой город уже есть";
        field.value = "";
        break;
      } else {
        message.textContent = "";
        console.log(field.value)
        let lastEl = city[city.length - 1];
        let lastSymbol = lastEl.slice(-1);
        // if (lastSymbol == 'ь' || lastSymbol == 'ъ' || lastSymbol == 'ё') {
        //   lastSymbol = lastEl.slice(-1);
        //   console.log(lastSymbol)
        // }
        let firstSymbol = field.value.slice(0, 1);
        if (lastSymbol == firstSymbol) {
          city.push(field.value);
          field.value = ''
          break
        } else {
          message.textContent = "Неподходит";
          field.value = ''
          break;
        }
      }
    }
  }
});
