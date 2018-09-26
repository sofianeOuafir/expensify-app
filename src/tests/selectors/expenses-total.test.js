import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(selectExpensesTotal([expenses[0]])).toEqual(195);
});

test('should correctly add up a multiple expense', () => {
  expect(selectExpensesTotal(expenses)).toEqual(114195);
});