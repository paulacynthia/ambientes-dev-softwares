const quicksort = require("../quicksort");

it("Ordena um array de números", () => {
  expect(quicksort([5, 3, 2, 4, 1])).toStrictEqual(
    "Os valores ordenados são: 1,2,3,4,5"
  );
});

it("Ordena um array de números", () => {
  expect(quicksort([10, 4, 5, 9, 6])).toStrictEqual(
    "Os valores ordenados são: 4,5,6,9,10"
  );
});
