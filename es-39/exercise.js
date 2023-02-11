function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return number * value;
  }
  return inner();
}
let print= multiplyByTwo(4);
console.log(print);
