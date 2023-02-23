function func(num) {
  if (num > 0) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(num * num);
      }, 2000);
    });
  } else if (num == 0) {
    return new Promise.resolve(0);
  } else {
    return new Promise.reject("incorrenct number");
  }
}

func(2).then(function (res) {
  console.log(res);
});
