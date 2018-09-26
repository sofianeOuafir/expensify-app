import React from "react";
import { connect } from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses'; 

export const ExpensesSummary = props => (
  <div>
    <p>Viewing {props.expenseCount} totalling {numeral(props.total / 100).format('$0,0.00')} </p>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  return {
    expenseCount: visibleExpenses.length,
    total: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
