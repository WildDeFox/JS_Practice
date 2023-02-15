// Дан следующий массив работников:
// Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employ of employees) {
  console.log(employ.name + ' ' + employ.salary);
}


// Выведите на экран сумму зарплат всех работников.
let sumSalary = 0;
for (let employ of employees) {
  sumSalary += employ.salary;
}
console.log(sumSalary);


// Дан следующий массив работников:
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let employees1 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sumSalary1 = 0
for (let employ of employees1) {
  if (employ.age >= 30) {
    sumSalary1 += employ.salary;
  }
}
console.log(sumSalary1);