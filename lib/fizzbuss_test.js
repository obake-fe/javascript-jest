const fizzbuzz = require("./fizzbuzz");

test("1を渡すと文字列1を返す", () => {
  expect("1").toEqual(fizzbuzz(1));
});

test("2を渡すと文字列2を返す", () => {
  expect("2").toEqual(fizzbuzz(2));
});

test("3を渡すと文字列'Fizz'を返す", () => {
  expect("Fizz").toEqual(fizzbuzz("3"));
});

test("5を渡すと文字列'Buzz'を返す", () => {
  expect("Buzz").toEqual(fizzbuzz("5"));
});
