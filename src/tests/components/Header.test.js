import Header from '../../components/Header';
import { shallow } from 'enzyme';
import React from 'react';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});