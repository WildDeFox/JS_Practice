let elem = document.querySelector(".elem");
let count = localStorage.getItem("count");
if (!count) {
  let nowCount = 1;
  localStorage.setItem("count", nowCount);
} else {
  let newNow = Number(localStorage.getItem("count")) + 1;
  localStorage.setItem("count", newNow);
}

elem.textContent += localStorage.getItem("count");

if(count == 100) {
  localStorage.removeItem('count');
}