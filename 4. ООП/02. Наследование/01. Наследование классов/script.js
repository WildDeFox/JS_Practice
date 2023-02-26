class User {
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Employee extends User {
  setSalary(salary) {
    this.salary = salary;
  }

  setAge(age) {
    if (age > 18 && age < 65) {
      super.setAge(age)
    } else {
      throw new Error("incorrect age");
    }
  }

  getSalary() {
    return this.salary;
  }

  getAge() {
    return this.age
  }
}

let emp = new Employee();
emp.setName("Nik");
console.log(emp.getName());
emp.setSalary(20000);
console.log(emp.getSalary());
emp.setAge(55);
console.log(emp.getAge());