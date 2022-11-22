var numberOne = 18
var numberTwo = 60

var bigger
var GCD = 1

var valueFinalOne = numberOne
var valueFinalTwo = numberTwo

bigger = numberOne

if (numberOne > numberTwo) {
  bigger = numberOne
} else if (numberOne < numberTwo) {
  bigger = numberTwo
} else {
  console.log('Os números são iguais!')
}

for (let i = 2; i <= bigger; i++) {
  while (numberOne % i == 0 && numberTwo % i == 0) {
    numberOne = numberOne / i
    numberTwo = numberTwo / i

    GCD = GCD * i
  }
}

console.log(`MDC (${valueFinalOne},${valueFinalTwo}) = ${GCD}`)
