// Сделайте конструктор класса Employee.
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // Сделайте метод, который будет выводить имя работника.
  showName() {
    console.log('Вас зовут: ' + this.name)
  }

  // Сделайте метод, который будет выводить зарплату работника.
  showSalary() {
    console.log('Ваша зарплата: ' + this.salary)
  }

  // Сделайте метод, который будет увеличивать зарплату работника на 10%.
  appSalary() {
    this.salary = this.salary * 1.10}
}

let emp1 = new Employee('Jhon', 2000);
emp1.showName();
emp1.showSalary();
emp1.appSalary();
emp1.showSalary()