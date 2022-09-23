import operate from '../logic/operate';

describe('Unit Testing For calculator operations logic', () => {
    test('test for adding numbers', () => {
      const number1 = 5;
      const number2 = 5;
      const operator = '+';
      const result = operate(number1, number2, operator);
      expect(result).toBe('10');
    });
    test('test for subtracting numbers', () => {
      const number1 = 35;
      const number2 = 15;
      const operator = '-';
      const result = operate(number1, number2, operator);
      expect(result).toBe('20');
    });
    test('test for multiplying numbers', () => {
      const number1 = 5;
      const number2 = 15;
      const operator = 'x';
      const result = operate(number1, number2, operator);
      expect(result).toBe('75');
    });
    test('test for multiplying numbers by zero', () => {
      const number1 = 5;
      const number2 = 0;
      const operator = 'x';
      const result = operate(number1, number2, operator);
      expect(result).toBe('0');
    });
    test('test for dividing numbers', () => {
      const number1 = 35;
      const number2 = 7;
      const operator = '÷';
      const result = operate(number1, number2, operator);
      expect(result).toBe('5');
    });
    test('test for dividing numbers by zero', () => {
      const number1 = 35;
      const number2 = 0;
      const operator = '÷';
      const result = operate(number1, number2, operator);
      expect(result).toBe("Can't divide by 0.");
    });
    test('test for modulo numbers', () => {
      const number1 = 55;
      const number2 = 3;
      const operator = '%';
      const result = operate(number1, number2, operator);
      expect(result).toBe('1');
    });
    test('test for modulo operator', () => {
      const number1 = 5;
      const number2 = 0;
      const operator = '%';
      const result = operate(number1, number2, operator);
      expect(result).toBe("Can't find modulo as can't divide by 0.");
    });
  });