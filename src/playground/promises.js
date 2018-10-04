
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('yo');
  }, 3000)
});

promise.then((v) => {
  console.log(v);
});
