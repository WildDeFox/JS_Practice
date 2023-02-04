// let func = (function () {
//   let num = 0;
//   return function () {
//     console.log(num);
//     num++;
//   };
// })();

// Модифицируйте работу счетчика так, чтобы он считал до 5,
// а потом отсчет начинался сначала.
let func = (function () {
  let num = 0;
  return function () {
    if (num == 5) {
      console.log(num);
      num = 0;
    } else {
      console.log(num);
      num++;
    }
  };
})();
func()
func()
func()
func()
func()
func()
func()
func()
