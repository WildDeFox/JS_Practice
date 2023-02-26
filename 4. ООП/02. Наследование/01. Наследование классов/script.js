class User {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name
  }
}

class Employee extends User {

}

let emp = new Employee;
emp.setName('Nik');
console.log(emp.getName())