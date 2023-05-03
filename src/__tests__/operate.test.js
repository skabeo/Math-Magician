import operate from '../logic/operate';

describe('operate', () => {
  it('should add two numbers and return a result', () => {
    expect(operate('5', '2', '+')).toEqual('7');
  });

  it('should subtract two numbers and return a result', () => {
    expect(operate('5', '2', '-')).toEqual('3');
  });

  it('should multiply two numbers and return a result', () => {
    expect(operate('5', '2', 'x')).toEqual('10');
  });

  it('should divide two numbers', () => {
    expect(operate('10', '2', '÷')).toEqual('5');
  });

  it('should handle division by zero', () => {
    expect(operate('10', '0', '÷')).toEqual("Can't divide by 0.");
  });

  it('should find the modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toEqual('1');
  });

  it('should handle modulo when dividing by zero', () => {
    expect(operate('10', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '2', '&')).toThrow("Unknown operation '&'");
  });
});
