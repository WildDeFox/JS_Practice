// В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let {width: w, height: h, color: c = 'black'} = options;
