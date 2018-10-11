import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
import React from 'react';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should fire startLogout when logout button get clicked', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});