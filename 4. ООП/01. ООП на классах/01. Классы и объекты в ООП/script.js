// Сделайте класс Employee.
class Employee {
  // Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.
  show() {
    return '+++'
  }

}


// Создайте объект класса Employee и выведите его в консоль.
let employer = new Employee;
console.log(employer);


// Создайте несколько объектов класса Employee.
let emp1 = new Employee;
let emp2 = new Employee;


// В объект класса Employee запишите свойства name, age и salary.
employer.name = 'Jhon';
employer.age = '27';
employer.salary = 2700;


// Запишите в свойство каждого работника его имя и зарплату.
emp1.name = "Igor";
emp1.age = "26";
emp1.salary = 3000;

emp2.name = "Smit";
emp2.age = "26";
emp2.salary = 1000;


// Получите данные из записанных свойств и выведите их на экран.
console.log(employer.name);
console.log(employer.age);
console.log(employer.salary);


// Выведите на экран сумму зарплат созданных вами работников.
console.log(employer.salary + emp1.salary + emp2.salary);

console.log(employer.show())