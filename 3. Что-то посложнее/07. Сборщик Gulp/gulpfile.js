let gulp = require('gulp');
const { series } = require('gulp');
const { parallel } = require('gulp');
let {src, dest} = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let less = require('gulp-less');
const sass = require('gulp-sass')(require('sass'));

function task(cb) {
  taskDay(cb);
  taskMonth(cb);
  taskYear(cb);
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


// Композиции задач
// Последовательное выполнение
function taskD(cb) {
  series(task1, task2);
  cb();
}

function task1(cb) {
  console.log('task1');
  cb();
}

function task2(cb) {
  console.log('task2');
  cb();
}


// Параллельное выполнение
function taskC(cb) {
  parallel(task1, task2);
  cb();
}


function taskSrc(cb) {
  return src('src/css/style1.css')
  .pipe(dest('dist'))
}

function taskSrcArr(cb) {
  let srcArr = [
    'src/css/style1.css',
    'src/css/style2.css',
    'src/css/style3.css',
  ];

  return src(srcArr).pipe(dest('dist'))
}


// Минимизация файлов
function taskCleanCSS(cb) {
  return src('src/css/style1.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'))
}

function taskCleanJS(cb) {
  return src('src/js/script1.js')
    .pipe(uglify())
    .pipe(dest('dist'))
}


// Препроцессоры CSS
function taskLess(cb) {
  return src('src/css/style4.less')
    .pipe(less())
    .pipe(dest('dist'))
}

function taskSass(cb) {
  return src('src/css/style5.sass')
    .pipe(sass())
    .pipe(dest('dist'))
}



exports.default = task;
exports.taskD = taskD;
exports.taskC = taskC;
exports.taskSrc = taskSrc;
exports.taskSrcArr = taskSrcArr;
exports.taskCleanCSS = taskCleanCSS;
exports.taskCleanJS = taskCleanJS;
exports.taskLess = taskLess;
exports.taskSass = taskSass;
