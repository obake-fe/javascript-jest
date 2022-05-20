/**
 * ClosedRange 閉区間に関するモジュール
 */
class ClosedRange {
  constructor(lowerEndpoint, upperEndpoint) {
    if (lowerEndpoint > upperEndpoint) {
      throw new Error();
    }

    this.lowerEndpoint = lowerEndpoint;
    this.upperEndpoint = upperEndpoint;
    this.closedRange = [this.lowerEndpoint, this.upperEndpoint];
  }

  getLowerEndpoint() {
    return this.lowerEndpoint;
  }

  getUpperEndpoint() {
    return this.upperEndpoint;
  }

  convertString() {
    return `[${this.closedRange}]`;
  }

  contains(value) {
    if (value instanceof ClosedRange) {
      return (
        this.lowerEndpoint <= value.lowerEndpoint &&
        value.upperEndpoint <= this.upperEndpoint
      );
    }
    return this.lowerEndpoint <= value && value <= this.upperEndpoint;
  }

  equals(arr) {
    return (
      arr.closedRange[0] === this.closedRange[0] &&
      arr.closedRange[1] === this.closedRange[1]
    );
  }
}
module.exports = ClosedRange;
