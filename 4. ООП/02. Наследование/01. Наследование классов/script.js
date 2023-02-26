class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name
  }
}

class Employee extends User {
  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

let emp = new Employee;
emp.setName('Nik');
console.log(emp.getName())
emp.setSalary(20000);
console.log(emp.getSalary())