const assert = require("assert").strict;
const fizzbuzz = require("./fizzbuzz");

// なぜそのテストケースを選んだかを書く（初見の人でも分かるように）

describe("FizzBuzz 数列とその変換規則を扱う fizzbuzz モジュール", () => {
  describe("fizzbuzz関数は引数に与えられた整数を文字列に変換する", () => {
    describe("3の倍数のときは数の代わりにFizzに変換する", () => {
      test("同値類の中の最小の3の倍数である3を渡すと文字列Fizzを返す", () => {
        assert(fizzbuzz(3) === "Fizz");
      });
      test("上限の境界値のひとつ内側の値99を渡すと文字列Fizzを返す", () => {
        assert(fizzbuzz(99) === "Fizz");
      });
    });

    describe("5の倍数のときは数の代わりにBuzzに変換する", () => {
      test("同値類の中の最小の5の倍数である5を渡すと文字列Buzzを返す", () => {
        assert(fizzbuzz(5) === "Buzz");
      });
      test("上限の境界値100は5の倍数なので100を渡すと文字列Buzzを返す", () => {
        assert(fizzbuzz(100) === "Buzz");
      });
    });

    describe("3と5両方の倍数のときは数の代わりにFizzBuzzに変換する", () => {
      test("同値類の中の最小の3と5の倍数である15を渡すと文字列FizzBuzzを返す", () => {
        assert(fizzbuzz(15) === "FizzBuzz");
      });
    });

    describe("その他の数のときは数をそのまま文字列に変換する", () => {
      test("下限の境界値1を渡すと文字列1を返す", () => {
        assert(fizzbuzz(1) === "1");
      });
      test("下限の境界値のひとつ内側の値2を渡すと文字列2を返す", () => {
        assert(fizzbuzz(2) === "2");
      });
    });

    describe("仕様の範囲外の値を渡してもと同じ規則が適用される", () => {
      test("上限の境界値のひとつ外側の値101を渡すと文字列101を返す", () => {
        assert(fizzbuzz(101) === "101");
      });
      test("下限の境界値のひとつ外側の値0は3と5の倍数であるので文字列FizzBuzzを返す", () => {
        assert(fizzbuzz(101) === "101");
      });
    });
  });
});
