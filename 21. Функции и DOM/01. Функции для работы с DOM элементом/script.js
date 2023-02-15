function setText(id, text) {
  let elem = document.getElementById(id)
  elem.textContent = text;
}

setText('elem1', 'Hello world');


function setAttr(selector, attr, value) {
  let elem = document.querySelector(selector);
  elem[attr] = value;
}

setAttr('#elem2', 'textContent', 'My name')