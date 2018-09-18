import moment from 'moment';
import {
  getVisibleExpenses
} from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Gum',
  amount: 195,
  createdAt: 0,
  note: ''
}, {
  id: '2',
  description: 'Rent',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
  note: ''
}, {
  id: '3',
  description: 'Credit Card',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf(),
  note: ''
}];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([expenses[1], expenses[2], expenses[0]]);
});