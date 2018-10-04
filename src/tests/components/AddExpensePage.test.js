import { AddExpensePage } from '../../components/AddExpensePage';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render addExpensePageCorrectly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should add the expense and redirect to home on submit', () => {
  wrapper.find('ExpenseForm').simulate('submit', expenses[0]);
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});