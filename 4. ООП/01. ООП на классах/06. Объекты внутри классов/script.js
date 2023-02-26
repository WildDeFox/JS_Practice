class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Position {
  constructor(position) {
    this.position = position;
  }
}

class Department {
  constructor(department) {
    this.department = department;
  }
}

let pos = new Position('front');
let dep = new Department('develop');
let emp = new Employee('Egor', pos, dep);
console.log(emp.position);