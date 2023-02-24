// В объект класса Student запишите свойства name и surn.
class Student {
  // Объявите в классе Student свойства name и surn.
  name = 'Новый ';
  surn = 'Студент';

  // Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.
  show() {
    return this.cape(this.name) + '.' + this.cape(this.surn) + '.';
  }

  // Сделайте вспомогательный метод, который будет 
  // получать первый символ строки и делать его заглавным.
  cape(str) {
    return str[0].toUpperCase();
  }
}

let std = new Student;
std.name = "Viktor";
std.surn = "Ivanov";

console.log(std.show())

let std1 = new Student;
console.log(std1);
console.log(std1.show())