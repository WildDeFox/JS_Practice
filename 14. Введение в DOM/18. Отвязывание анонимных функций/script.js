// Дан список ul, в каждом пункте которого 
// записано число. Сделайте так, чтобы по клику 
// на любую li ее число увеличивалось на единицу.
let lis = document.querySelectorAll('li');

// for (let li of lis) {
//   li.addEventListener('click', func)
// }
// function func() {
//   this.textContent++;
// }


// Модифицируйте предыдущую задачу так, 
// чтобы каждая li увеличивала свое значение 
// только по первому нажатию на нее.
// function func() {
//   this.textContent++;
//   this.removeEventListener('click', func);
// }

// Модифицируйте предыдущую задачу так, 
// чтобы каждая li увеличивала свое значение 
// только если ее значение меньше 10.
for (let li of lis) {
  li.addEventListener('click', function func() {
    if (li.textContent < 10) {
      li.textContent++;
    } else {
      li.removeEventListener('click', func)
    }
  })
}