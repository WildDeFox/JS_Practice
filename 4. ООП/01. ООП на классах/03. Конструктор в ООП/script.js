// Сделайте конструктор класса Employee.
class Employee {
  // В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
  #name;
  #salary;
  #age;
  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  show() {
    console.log('Вас зовут: ' + this.#name + ', вам ' + this.#age + ' лет. Ваша ЗП составляет: ' + this.#salary)
  }

  // // Сделайте метод, который будет выводить имя работника.
  // showName() {
  //   console.log('Вас зовут: ' + this.name)
  // }

  // // Сделайте метод, который будет выводить зарплату работника.
  // showSalary() {
  //   console.log('Ваша зарплата: ' + this.salary)
  // }

  // // Сделайте метод, который будет увеличивать зарплату работника на 10%.
  // appSalary() {
  //   this.salary = this.salary * 1.10}
}

let emp1 = new Employee('Jhon', 2000, 25);
emp1.show()