function func() {
	console.log(this.value);
}
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

func.call(elem1);
func.call(elem2);
func.call(elem3);


let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem, "Smit",'Jhon'); // тут должно вывести 'hello, John Smit'