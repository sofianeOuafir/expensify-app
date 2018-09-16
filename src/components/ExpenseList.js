import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1> 
    { props.expenses.map((expense, index) => <ExpenseListItem key={index} {...expense} />)}
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);