import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test("should render correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  const expense = expenses[0];
  wrapper.find('ExpenseForm').simulate('submit', expense);
  expect(editExpense).toHaveBeenCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenCalledWith('/');
});

test('should handle remove expense', () => {
  const id = expenses[0].id;
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenCalledWith(id);
  expect(history.push).toHaveBeenCalledWith('/');
});