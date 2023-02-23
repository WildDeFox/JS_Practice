export default {
	'/handler/': function({post}) {
    if (post.login == 'admin' || post.password == 'admin') {
      console.log('Вход успешно выполнен')
      return 'Login success';
    } else {
      console.log('Вход запрещен')
      return 'Login fail';
    }
  }
}