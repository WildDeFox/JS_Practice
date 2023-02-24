// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
class Employee {
  #name;
  #salary;
  #age;

  constructor(name, salary, age) {
    this.#name = name;
    this.#salary = salary;
    this.#age = age;
  }

  // Сделайте геттеры, выводящие значения каждого из наших свойств.
  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }

  getAge() {
    return this.#age;
  }
}