import React from "react";
import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import moment from 'moment';

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense correctly", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const description = "Car";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value: description } });
  expect(wrapper.state("description")).toEqual(description);
  expect(wrapper).toMatchSnapshot();
});

test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const note = "Brand new car built in 2018";
  wrapper.find("textarea").simulate("change", { target: { value: note } });
  expect(wrapper.state("note")).toBe(note);
  expect(wrapper).toMatchSnapshot();
});

test("should set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const amount = "23.50";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: amount } });
  expect(wrapper.state("amount")).toBe(amount);
});

test("should not set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const amount = "12.122";
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: amount } });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state('note')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

test('should set new date on date change', () => {
  const createdAt = moment(12);
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').simulate('dateChange', createdAt);
  expect(wrapper.state('createdAt')).toEqual(createdAt);
});

test('should set new calendar focused on focus change', () => {
  const focused = { focused: true };
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(true);
});