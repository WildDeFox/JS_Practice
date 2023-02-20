let surnameInput = document.querySelector('.surname');
let nameInput = document.querySelector('.name');
let ageInput = document.querySelector('.age');
let button = document.querySelector('.button');

let users = [
	{
		surname: 'surname1',
		name: 'name1',
		age: 31,
	},
	{
		surname: 'surname2',
		name: 'name2',
		age: 32,
	},
	{
		surname: 'surname3',
		name: 'name3',
		age: 33,
	},
];

localStorage.setItem('users', JSON.stringify(users));

let now = JSON.parse(localStorage.getItem('users'))

button.addEventListener('click', function() {
  now.push({
    surname: surnameInput.value,
    name: nameInput.value,
    age: ageInput.value,
  })
  localStorage.setItem('users', JSON.stringify(now))
  surnameInput.value = '';
  nameInput.value = '';
  ageInput.value = '';
})
