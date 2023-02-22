export default {
	'/handler/': function({get}) {
    return Number(get.input1) + Number(get.input2)
  }
}