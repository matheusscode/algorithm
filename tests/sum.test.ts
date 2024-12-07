import { Calculator } from "@/scripts/calc";
import { describe, expect, test } from "@jest/globals";
const {
  addition,
  subtraction,
  multiplication,
  division,
  squareRoot,
  potentiation,
  cubicRoot,
} = new Calculator();

describe("Addition Module", () => {
  test("Adds 1 + 2 to equal 3", () => {
    expect(addition(1, 2)).toBe(3);
  });

  test("Adds 4 + 4 + 4 to equal 12", () => {
    expect(addition(4, 4, 4)).toBe(12);
  });
});

describe("Subtraction Module", () => {
  test("Subtract 5 - 1 to equal 4", () => {
    expect(subtraction(5, 1)).toBe(4);
  });

  test("Subtract 1 - 5 to equal -4", () => {
    expect(subtraction(5, 1)).toBe(4);
  });
});

describe("Multiplication Module", () => {
  test("Multiplication 5 x 5 to equal 25", () => {
    expect(multiplication(5, 5)).toBe(25);
  });

  test("Multiplication 5 x 5 to equal 25", () => {
    expect(multiplication(5, 5, 5)).toBe(125);
  });
});

describe("Division Module", () => {
  test("Division 8 / 2 to equal 2", () => {
    expect(division(8, 2)).toBe(4);
  });

  test("Division 12 / 2 to equal 2", () => {
    expect(division(12, 2)).toBe(6);
  });

  test("The 12 by 0 operation cannot be performed.", () => {
    expect(() => division(12, 0)).toThrow("The value 'b' cannot be 0");
  });
});

describe("SquareRoot Module", () => {
  test("The square root of 4 is 2", () => {
    expect(squareRoot(4)).toBe(2);
  });

  test("The square root of 8 is 2.8284271247461903", () => {
    expect(squareRoot(8)).toBe(2.8284271247461903);
  });

  test("Square root of a negative number throws an error", () => {
    expect(() => squareRoot(-8)).toThrow(
      "Cannot calculate the square root of a negative number.",
    );
  });
});

describe("Potentiation Module", () => {
  test("2 to the power of 3 is 8", () => {
    expect(potentiation(2, 3)).toBe(8);
  });

  test("5 to the power of 2 is 25", () => {
    expect(potentiation(5, 2)).toBe(25);
  });

  test("3 to the power of -2 is approximately 0.111", () => {
    expect(potentiation(3, -2)).toBeCloseTo(0.111, 3);
  });

  test("Throws error when inputs are invalid", () => {
    expect(() => potentiation(NaN, 2)).toThrow(
      "Both base and exponent must be valid numbers.",
    );
  });
});

describe("CubicRoot Module", () => {
  test("The cubic root of 8 is 2", () => {
    expect(cubicRoot(8)).toBe(2);
  });

  test("The cubic root of 27 is 3", () => {
    expect(cubicRoot(27)).toBe(3);
  });

  test("The cubic root of -8 is -2", () => {
    expect(cubicRoot(-8)).toBe(-2);
  });

  test("The cubic root of 0 is 0", () => {
    expect(cubicRoot(0)).toBe(0);
  });

  test("The cubic root of a fractional number (0.125) is 0.5", () => {
    expect(cubicRoot(0.125)).toBe(0.5);
  });

  test("The cubic root of a large number (1000) is 10", () => {
    expect(cubicRoot(1000)).toBe(10);
  });

  test("The cubic root of an irrational result (2) is approximately 1.26", () => {
    expect(cubicRoot(2)).toBeCloseTo(1.2599, 4);
  });
});
