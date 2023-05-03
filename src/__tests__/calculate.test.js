import calculate from '../logic/calculate';

describe('calculate', () => {
  it('returns an object with null values when the "AC" button is pressed', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('updates "next" when a number button is pressed and an operation is selected', () => {
    const obj = {
      total: '2',
      next: null,
      operation: '+',
    };
    const result = calculate(obj, '5');
    expect(result).toEqual({
      total: '2',
      next: '5',
      operation: '+',
    });
  });

  it('updates "total" and clears "next" when the "=" button is pressed', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });

  it('updates "next" when the "." button is pressed and no operation is selected', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: null,
    };
    const result = calculate(obj, '.');
    expect(result).toEqual({
      total: '2',
      next: '5.',
      operation: null,
    });
  });

  it('updates "next" when the "." button is pressed and an operation is selected', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '.');
    expect(result).toEqual({
      total: '2',
      next: '5.',
      operation: '+',
    });
  });

  it('returns the negative value of "next" or "total" when the "+/-" button is pressed', () => {
    const obj = {
      total: '2',
      next: '-5',
      operation: '+',
    };
    const result = calculate(obj, '+/-');
    expect(result).toEqual({
      total: '2',
      next: '5',
      operation: '+',
    });
  });

  it('updates the operation when a different operation button is pressed', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '-');
    expect(result).toEqual({
      total: '7',
      next: null,
      operation: '-',
    });
  });

  it('should update `next` with the new number after an operation is selected', () => {
    const obj = { total: '10', next: null, operation: '+' };
    const buttonName = '2';
    const expected = { total: '10', next: '2', operation: '+' };
    const actual = calculate(obj, buttonName);
    expect(actual).toEqual(expected);
  });
})
