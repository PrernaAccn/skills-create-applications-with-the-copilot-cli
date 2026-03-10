const { calculate, add, subtract, multiply, divide } = require('../calculator');

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
        calculate('10', '^', '2');
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
});
