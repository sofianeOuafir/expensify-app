import { AddExpensePage } from '../../components/AddExpensePage';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render addExpensePageCorrectly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should add the expense and redirect to home on submit', () => {
  wrapper.find('ExpenseForm').simulate('submit', expenses[0]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});