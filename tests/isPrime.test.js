const isPrime = require("../isPrime");

it("Número primo", () => {
  expect(isPrime(7)).toBe("7 é um número primo");
});

it("Não é um número primo", () => {
  expect(isPrime(4)).toBe("4 não é um número primo");
});

it("Número primo negativo", () => {
  expect(isPrime(-9)).toBe("Por favor, insira um número positivo.");
});
