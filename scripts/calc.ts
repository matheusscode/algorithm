export class Calculator {
  addition(...numbers: number[]): number {
    const result = numbers.reduce((acc, current) => acc + current, 0);
    return result;
  }

  subtraction(...numbers: number[]): number {
    const result = numbers.reduce((acc, current) => acc - current);
    return result;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("The value 'b' cannot be 0");
    }

    const result = a / b;

    return result;
  }

  multiplication(...numbers: number[]): number {
    const result = numbers.reduce((acc, current) => acc * current);

    return result;
  }

  squareRoot(number: number): number {
    if (number < 0) {
      throw new Error("Cannot calculate the square root of a negative number.");
    }

    return Math.sqrt(number);
  }

  potentiation(base: number, exponent: number): number {
    if (isNaN(base) || isNaN(exponent)) {
      throw new Error("Both base and exponent must be valid numbers.");
    }

    return base ** exponent;
  }

  cubicRoot(number: number): number {
    return Math.cbrt(number);
  }
}
