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
    // В классе Employee в сеттере возраста сделайте проверку на то, что возраст должен быть от 0 до 120.
    if (age > 0 && age < 120) {
      this.#age = age;
    } else {
      throw new Error ('incorrect age')
    }
    
  }
 }