import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import React from 'react';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});