import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage component correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should fire startLogin when login button get clicked', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalled();
});