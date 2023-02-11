function printName() {
  let helloName = "Hello John";

  function inner() {
    return helloName;
  }

  inner();
}
console.log(printName());
