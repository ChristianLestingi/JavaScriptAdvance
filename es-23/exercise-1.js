const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// metodo alternativo
// const key = Object.entries(person);
// console.log(key)

// Print values of person using Object.keys
const keyVAlue = [];
const keys = Object.keys(person);
keyVAlue.push(keys);
const values = Object.values(person);
keyVAlue.push(values);

function sum() {
  console.log(
    [keys[0] + ": " + values[0]],
    [keys[1] + ": " + values[1]],
    [keys[2] + ": " + values[2]],
  );
}

sum();
