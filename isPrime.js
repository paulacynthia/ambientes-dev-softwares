function isPrime(number) {
  let isPrime = true;

  if (number < 0) {
    return "Por favor, insira um número positivo.";
  }

  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      return number + " não é um número primo";
      isPrime = false;
      break;
    }
  }
  if (isPrime) return number + " é um número primo";
  isPrime = true;
}

module.exports = isPrime;