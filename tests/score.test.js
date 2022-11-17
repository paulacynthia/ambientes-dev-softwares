const score = require("../score");

it("Os cinco primeiros termos de Score", () => {
  expect(score(5)).toStrictEqual([0, 1, 2, 3, 4, 5]);
});

it("OS dois primeiros termos de Score", () => {
  expect(score(2)).toStrictEqual([0, 1, 2]);
});
