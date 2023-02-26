class Employee {
  #name;
  #age;
  #salary;

  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getSalary() {
    return this.#salary;
  }
}

let emps = [
  new Employee('Rick', 20, 20000),
  new Employee('Morty', 15, 2000),
  new Employee('Djeri', 40, 40)
]

for(let emp of emps) {
  console.log(emp.getName())
}