let length = 5;
let totalNumbers = [1, 5, 6, 3, 4];
let summation = 0;

for (let i = 0; i < totalNumbers.length; i++) {
   summation = summation + totalNumbers[i];
}

console.log("Elementos que desejo somar: " + totalNumbers);
console.log("Total da soma dos elementos: " + summation);