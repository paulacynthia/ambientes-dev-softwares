function fibonnaci(length) {
  let a = 0;
  let b = 1;
  let numbers = [];

  if (length <= 0) {
    return numbers;
  }

  for (let j = 0; j < length; j++) {
    numbers.push(a);
    let aux = a + b;
    a = b;
    b = aux;
  }
  return numbers;
}

module.exports = fibonnaci;