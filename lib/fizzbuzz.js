function fizzbuzz(num) {
  if (num === "3") {
    return "Fizz";
  }
  if (num === "5") {
    return "Buzz";
  }
  return String(num);
}

module.exports = fizzbuzz;
