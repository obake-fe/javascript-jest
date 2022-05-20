const assert = require("assert").strict;
const ClosedRange = require("./exercise");

describe("ClosedRange 閉区間に関するモジュール", () => {
  let closedRange;

  beforeEach(() => {
    closedRange = new ClosedRange(3, 8);
  });

  describe("getメソッドで端点を返す", () => {
    test("閉区間[3,8]の下端点3を返す", () => {
      assert(closedRange.getLowerEndpoint() === 3);
    });
    test("閉区間[3,8]の上端点8を返す", () => {
      assert(closedRange.getUpperEndpoint() === 8);
    });
  });

  describe("閉区間を表す配列を文字列表現にして返す", () => {
    test("閉区間[3,8]を渡して文字列表記を返す", () => {
      assert(closedRange.convertString() === "[3,8]");
    });
  });

  describe("上端点より下端点が大きい閉区間を作ろうとすると例外が発生する", () => {
    test.each([
      { lowerEndPoint: 12, upperEndpoint: 5 }
    ])(
      "上端点$upperEndpoint下端点$lowerEndPointを渡すと例外が発生する",
      ({ lowerEndPoint, upperEndpoint }) => {
        expect(() => new ClosedRange(lowerEndPoint, upperEndpoint)).toThrow();
      }
    );
  });

  describe("閉区間が指定した整数を含むかどうか判定する", () => {
    test.each([
      { integer: 5, result: true },
      { integer: -1, result: false }
    ])(
      "閉区間[3,8]は$integerを含むかどうかの結果は$result",
      ({ integer, result }) => {
        assert(closedRange.contains(integer) === result);
      }
    );
  });

  describe("閉区間が別の閉区間と等しいか判定する", () => {
    test.each([
      { range: [3, 8], result: true },
      { range: [1, 6], result: false }
    ])(
      "閉区間[3,8]と閉区間$rangeが等価かどうかの結果は$result",
      ({ range, result }) => {
        assert(
          closedRange.equals(new ClosedRange(range[0], range[1])) === result
        );
      }
    );
  });

  describe("閉区間が別の閉区間に完全に含まれるか判定する", () => {
    test.each([
      { range: [4, 6], result: true },
      { range: [1, 10], result: false }
    ])(
      "閉区間$range は 閉区間[3,8] に含まれるかどうかの判定は$result",
      ({ range, result }) => {
        assert(
          closedRange.contains(new ClosedRange(range[0], range[1])) === result
        );
      }
    );
  });
});
