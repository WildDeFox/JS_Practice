class Text {
  #text;

  constructor(text) {
    this.#text = text;
  }

  // Сделайте метод, который вернет количество символов в тексте.
  getLength() {
    return this.#text.length;
  }

  // Сделайте метод, который вернет количество букв в тексте.
  getSymbol() {
    let newText = this.#text.replace(/\s/g, "");
    return newText.length;
  }

  // Сделайте метод, который вернет массив слов.
  arrStr() {
    return this.#text.split(" ");
  }

  // Сделайте метод, который вернет массив предложений.
  arr() {
    return this.#text.split(".");
  }
}

let text = new Text("Привет мир. Как дела. У меня все хорошо");
console.log(text.getLength());
console.log(text.getSymbol());
console.log(text.arrStr());
console.log(text.arr());
