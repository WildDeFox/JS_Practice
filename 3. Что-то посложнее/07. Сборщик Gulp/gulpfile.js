let gulp = require('gulp');

function task(cb) {
  console.log('My first task');
  cb();
}

// Создайте задачу, выводящую в консоль текущий день.
function taskDay(cb) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  console.log(dd);
  cb();
}

// Создайте задачу, выводящую в консоль текущий месяц.
function taskMonth(cb) {
  let today = new Date();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  console.log(mm);
  cb();
}

// Создайте задачу, выводящую в консоль текущий год.
function taskYear(cb) {
  let today = new Date();
  let yyyy = today.getFullYear();
  console.log(yyyy);
  cb();
}

exports.default = task;
exports.taskDay = taskDay;
exports.taskMonth = taskMonth;
exports.taskYear = taskYear;