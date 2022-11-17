const fibonnaci = require("../fibonnaci");

it("Os 5 primeiros termos de Fibonnaci", () => {
  expect(fibonnaci(5)).toStrictEqual([0, 1, 1, 2, 3]);
});

it("Termos Fibonnaci negativos", () => {
  expect(fibonnaci(-1)).toStrictEqual([]);
});

it("Termo Fibonnaci igual a zero", () => {
  expect(fibonnaci(0)).toStrictEqual([]);
});
