// Выведите элементы этого массива в виде HTML таблицы.
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for(let employe of employees) {
  let tr = document.createElement('tr');
  
  let td1 = document.createElement('td');
  td1.textContent = employe.name;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent = employe.age;
  td2.addEventListener('click', function(){
    this.textContent++
  })
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent = employe.salary;
  td3.addEventListener('click', function() {
    this.textContent *= 1.10
  })
  tr.appendChild(td3)


  table.appendChild(tr)
}