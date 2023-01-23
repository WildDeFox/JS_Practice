// Перепишите следующий код через switch-case:
// let lang = 'ru';
// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }
const lang = 'ru';

switch (lang) {
  case 'ru':
    console.log("рус");
    break;
  case 'en':
    console.log('анг');
    break;
  case 'de':
    console.log('нем');
    break;
  default:
    console.log('Язык не поддерживается.')
}