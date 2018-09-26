import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly when 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} total={3000} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly when more than 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} total={3000} />);
  expect(wrapper).toMatchSnapshot();
});