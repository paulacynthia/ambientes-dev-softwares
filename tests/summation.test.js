const summation = require("../summation");

it("Soma de cinco elementos:", () => {
  expect(summation([1, 5, 6, 3, 4])).toStrictEqual(19);
});

it("Soma de dez elementos:", () => {
  expect(summation([9, 8, 4, 2, 2, 1, 5, 6, 3, 4])).toStrictEqual(44);
});
