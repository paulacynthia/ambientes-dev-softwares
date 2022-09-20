let number = 2
let isPrime = true

for (let j = 2; j < number; j++) {
  if (number % j == 0) {
    console.log(number + ' não é um número primo')
    isPrime = false
    break
  }
}
if (isPrime) console.log(number + ' é um número primo')
isPrime = true
