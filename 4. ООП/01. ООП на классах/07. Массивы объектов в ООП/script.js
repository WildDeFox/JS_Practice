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


// Сделайте класс EmployeesCollection, который будет содержать массив работников.
class EmployeesCollection {
  #employees;

  constructor() {
    this.#employees = [];
  }

  // Сделайте в этом классе метод для добавления нового работника.
  add(employee) {
    this.#employees.push(employee);
  }

  // Сделайте в этом классе метод для вывода всех работников.
  show() {
    for(let emp of this.#employees) {
      console.log(emp.getName());
    }
  }

  // Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.
  sumSalary() {
    let sum = 0;
    for(let emp of this.#employees) {
      sum += Number(emp.getSalary())
    }
    return sum
  }

}
let colloection = new EmployeesCollection;
let emp1 = new Employee('Rick', 20, 20000);
let emp2 = new Employee('Morty', 15, 2000);
let emp3 = new Employee('Djeri', 40, 40);
colloection.add(emp1);
colloection.add(emp2);
colloection.add(emp3);
colloection.show()
console.log(colloection.sumSalary())