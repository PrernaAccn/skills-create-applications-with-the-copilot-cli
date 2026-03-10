const { calculate, add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition Tests', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers correctly', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers correctly', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers correctly', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction Tests', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative number', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(8, 0)).toBe(8);
    });

    test('should subtract decimal numbers correctly', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });
  });

  describe('Multiplication Tests', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative numbers correctly', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });
  });

  describe('Division Tests', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal number', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide negative by positive correctly', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should divide two negative numbers correctly', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers correctly', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });
  });

  describe('Calculate Function Tests', () => {
    test('should calculate addition using string inputs', () => {
      expect(calculate('2', '+', '3')).toBe(5);
    });

    test('should calculate subtraction using string inputs', () => {
      expect(calculate('10', '-', '4')).toBe(6);
    });

    test('should calculate multiplication using string inputs', () => {
      expect(calculate('45', '*', '2')).toBe(90);
    });

    test('should calculate division using string inputs', () => {
      expect(calculate('20', '/', '5')).toBe(4);
    });

    test('should throw error for invalid operator', () => {
      expect(() => {
        calculate('10', '&', '2');
      }).toThrow('Invalid operator');
    });

    test('should throw error for invalid operand', () => {
      expect(() => {
        calculate('abc', '+', '5');
      }).toThrow('Invalid operands');
    });

    test('should throw error for division by zero', () => {
      expect(() => {
        calculate('10', '/', '0');
      }).toThrow('Cannot divide by zero');
    });

    test('should handle decimal string inputs correctly', () => {
      expect(calculate('5.5', '+', '2.5')).toBe(8);
    });
  });

  describe('Edge Cases Tests', () => {
    test('should handle very large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 15)).toBe(-10);
    });

    test('should handle multiplication by fraction', () => {
      expect(multiply(100, 0.1)).toBe(10);
    });

    test('should handle division resulting in fraction', () => {
      expect(divide(1, 2)).toBe(0.5);
    });
  });

  describe('Modulo Tests', () => {
    test('should calculate modulo with positive numbers correctly', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo from image example', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger numbers', () => {
      expect(modulo(20, 6)).toBe(2);
    });

    test('should calculate modulo with same numbers', () => {
      expect(modulo(7, 7)).toBe(0);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => {
        modulo(10, 0);
      }).toThrow('Cannot perform modulo with zero');
    });

    test('should handle decimal modulo correctly', () => {
      expect(modulo(7.5, 2)).toBe(1.5);
    });
  });

  describe('Power/Exponentiation Tests', () => {
    test('should calculate power from image example (2^3)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with positive exponent', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with base 5', () => {
      expect(power(5, 3)).toBe(125);
    });

    test('should calculate power with exponent 0', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent 1', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBe(2);
    });
  });

  describe('Square Root Tests', () => {
    test('should calculate square root from image example (√16)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root resulting in decimal', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should throw error for negative number', () => {
      expect(() => {
        squareRoot(-9);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for any negative value', () => {
      expect(() => {
        squareRoot(-1);
      }).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Advanced Calculate Function Tests', () => {
    test('should calculate modulo using calculate function', () => {
      expect(calculate('5', '%', '2')).toBe(1);
    });

    test('should calculate power using calculate function', () => {
      expect(calculate('2', '^', '3')).toBe(8);
    });

    test('should throw error for invalid advanced operator', () => {
      expect(() => {
        calculate('5', '√', '16');
      }).toThrow('Invalid operator');
    });
  });

  describe('Extended Edge Cases Tests', () => {
    test('should handle modulo with very large numbers', () => {
      expect(modulo(1000000, 13)).toBe(1000000 % 13);
    });

    test('should handle power with large exponent', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should handle square root of small decimal', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });
  });
});
