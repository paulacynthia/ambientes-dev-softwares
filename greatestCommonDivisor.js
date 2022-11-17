function greatestCommonDivisor(numberOne, numberTwo) {
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
    return 'Os números são iguais!'
  }

  for (let i = 2; i <= bigger; i++) {
    while (numberOne % i == 0 && numberTwo % i == 0) {
      numberOne = numberOne / i
      numberTwo = numberTwo / i

      GCD = GCD * i
    }
  }

  return `MDC (${valueFinalOne},${valueFinalTwo}) = ${GCD}`
}

module.exports = greatestCommonDivisor
