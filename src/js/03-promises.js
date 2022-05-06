function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


console.log('B');




console.log('C');

const promise = new Promise((resolve, reject) => {
let a = 0;

for (let i = 0; i < 1000000000; i += 1) {
  a += i;
}
  resolve(a);
})

promise.then((result) => {
  return console.log('result', result);
}).then((qwe) => {
return console.log(qwe);
})