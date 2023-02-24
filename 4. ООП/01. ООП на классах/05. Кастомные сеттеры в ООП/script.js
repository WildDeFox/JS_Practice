// Добавьте сеттеры свойств в ваш класс Employee.
class Employee {
  #name;
  #salary;
  #age;

  setName(name) {
    this.#name = name;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  setAge(age) {
    this.#age = age;
  }
 }