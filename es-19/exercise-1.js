let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// let person2 = person1;
// person2.firstName='Simon';



// Modify the property `firstName` of the `person2` in "Simon".


person2=Object.assign({}, person1);

person2.firstName='Simon';

console.log(person1);
console.log(person2);
// because they point to the same memory space



