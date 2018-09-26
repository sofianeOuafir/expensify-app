import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} total={3000} />);
  expect(wrapper).toMatchSnapshot();
});