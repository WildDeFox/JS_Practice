function square (num) {
  return num * num;
}

function cube (num) {
  return num * num * num;
}

// module.exports.square = square;
// module.exports.cube = cube;

module.exports = {square, cube}