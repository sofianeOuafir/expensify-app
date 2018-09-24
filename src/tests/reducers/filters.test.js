import {
  filtersReducer
} from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should handle set text filter action', () => {
  const text = 'something';
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text
  });
  expect(state).toEqual({
    text,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should handle sort by amount filter action', () => {
  const state = filtersReducer({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }, {
    type: 'SORT_BY_AMOUNT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should handle sort by date filter action', () => {
  const state = filtersReducer({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }, {
    type: 'SORT_BY_DATE'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should handle set start date action', () => {
  const startDate = moment().add(5, 'day');
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    endDate: moment().endOf('month'),
    startDate
  });
});

test('should handle set end date action', () => {
  const endDate = moment().add(5, 'day');
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate
  });
});