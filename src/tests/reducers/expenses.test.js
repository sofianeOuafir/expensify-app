import {
  expensesReducer
} from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('it should setup default value', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('it should handle add expense action', () => {
  const expense = {
    id: '123',
    description: 'Car',
    amount: 5000,
    createdAt: 123,
    note: ''
  };
  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});

test('it should remove expense', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  });
  expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
  const updates = {
    id: expenses[0].id,
    description: 'Rent',
    amount: 12000,
    createdAt: 456,
    note: 'last rent'
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  });
  expect(state[0]).toEqual(updates);
});

test('should not edit expenses if id is not found', () => {
  const updates = {
    description: 'Rent',
    amount: 12000,
    createdAt: 456,
    note: 'last rent'
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  });
  expect(state).toEqual(expenses);
});