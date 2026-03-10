#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Basic Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Advanced Operations:
 * - Modulo (%)
 * - Power/Exponentiation (^)
 * - Square Root (√)
 * 
 * Usage: node calculator.js <operand1> <operator> <operand2>
 * Example: node calculator.js 10 + 5
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(operand1, operator, operand2) {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid operands. Please provide valid numbers.');
  }

  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    default:
      throw new Error(`Invalid operator: ${operator}. Supported operators: +, -, *, /, %, ^`);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator <operand1> <operator> <operand2>');
    console.error('Basic operators: + (addition), - (subtraction), * (multiplication), / (division)');
    console.error('Advanced operators: % (modulo), ^ (power)');
    console.error('Special: √ (square root) - Usage: calculator √ <number>');
    console.error('Example: calculator 10 + 5');
    process.exit(1);
  }

  try {
    const result = calculate(args[0], args[1], args[2]);
    console.log(`${args[0]} ${args[1]} ${args[2]} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { calculate, add, subtract, multiply, divide, modulo, power, squareRoot };
