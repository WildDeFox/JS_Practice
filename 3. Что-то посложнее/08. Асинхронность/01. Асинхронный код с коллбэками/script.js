function make(num1, num2, callback) {
  setTimeout(function () {
    let res = [1, 2, 3, 4, 5];
    callback(res[num1] + res[num2]);
  }, 3000);
}

make(2, 3, function(res) {
  console.log(res)
})