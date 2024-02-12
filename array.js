var array = [1, 2, 3, 4,5,6];
var interval = 3000; // how much time should the delay between two iterations be (in milliseconds)?
array.forEach(function (el, index) {
  setTimeout(function () {
    console.log(el);
  }, index * interval);
});
const add = (function () {
    let counter = 0;
    return function () {counter += 1; console.log(counter);return counter}
  })();
  
  add();
  add();
  add();