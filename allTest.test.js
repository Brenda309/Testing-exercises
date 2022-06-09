const stringLength = require('./string.js');
const reverseString = require('./reverse.js');
const Calculator = require('./calculator.js');
const capitalize = require('./capitalization.js');

test('length should be equal to string', () => {
    expect(stringLength('hello')).toBe(5);
})

test('string should be reversed',() => {
    expect(reverseString('nana')).toBe('anan')
     expect(reverseString('hello')).toBe('olleh')
})

describe('Calculator', () => {
    test('add numbers', () => {
    expect(Calculator.add(1,2)).toBe(3);
     expect(Calculator.add(1,99)).toBe(100);
      expect(Calculator.add(1000,2)).toBe(1002);
    })
})

 test('numbers difference', () => {
    expect(Calculator.substract(5,2)).toBe(3);
     expect(Calculator.substract(100,2)).toBe(98);
      expect(Calculator.substract(1000,1)).toBe(999);
    })

     test('divide numbers', () => {
    expect(Calculator.divide(6,2)).toBe(3);
     expect(Calculator.divide(222,2)).toBe(111);
      expect(Calculator.divide(5000,2)).toBe(2500);
    })

     test('add numbers', () => {
    expect(Calculator.multiply(1,3)).toBe(3);
    expect(Calculator.multiply(2,3)).toBe(6);
     expect(Calculator.multiply(1000,1000)).toBe(1000000); expect(Calculator.add(1,2)).toBe(3);

    })

test('first letter should be in caps', () => {
expect(capitalize('hello')).toBe('Hello');
})
