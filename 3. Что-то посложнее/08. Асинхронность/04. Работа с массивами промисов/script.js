let promise = new Promise(function(resolve){
  let time = Math.random() * (10 - 1) + 1;
  resolve(time);
})

let promises = [];

for (let i = 0; i < 10; i++) {
  promises.push(promise)
}

Promise.race(promises).then(function(res){
  console.log(res)
})

console.log(promises)