let gulp = require('gulp');

function task(cb) {
  console.log('My first task');
  cb();
}

exports.default = task;