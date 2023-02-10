function sumUntil(maxValue) {
  let numbers = [];
  let baseNum = 0;

  do {
    numbers.push(baseNum);
    baseNum++;
  } while (baseNum <= maxValue);

  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += index;
    console.log(index);
  }
  return sum;
}

console.log(sumUntil(5));
