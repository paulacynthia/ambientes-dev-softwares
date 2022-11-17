function summation(totalNumbers) {
  let summation = 0;

  for (let i = 0; i < totalNumbers.length; i++) {
    summation = summation + totalNumbers[i];
  }

  return summation;
}

module.exports = summation;