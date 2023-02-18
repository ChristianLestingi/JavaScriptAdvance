class Person {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }
  set name(firstName) {
    this.firstName = firstName;
  }
  get name() {
    return this.firstName;
  }
  set surname(lastName) {
    this.lastName = lastName;
  }
  get surname() {
    return this.lastName;
  }
  set years(age) {
    this.age = age;
  }
  get years() {
    return this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
