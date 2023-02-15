// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

// function func([name, surname, department, position, salary]) {}
// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// function func([name, surname, ...info]) {
// 	console.log(info)
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );


// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

// function func([name, surname, department, position = 'джуниор']) {
//   console.log(position)
// }

// func( ['John', 'Smit', 'development', 'синьор'] );


// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

// function func(department, [name, surname], [year, month, day]) {
//   console.log(department, name, surname, year, month, day);
// }
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );


// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }

// function func({color, width, height}) {
//   console.log(color)
// }
// func( {color: 'red', width: 400, height: 500} );


//Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

function func({width, height, color = 'black'}) {
  console.log(color);
}

func( {color: 'red', width: 400, height: 500} );