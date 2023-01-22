// Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. 
// Выведите на экран фамилию, имя и отчество через пробел.
const user = {
  'name': 'Иван',
  'surname': 'Иванов',
  'patronymic': 'Иванович',
  'age': 30
};
console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);