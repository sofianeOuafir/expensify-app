import React from "react";
import { connect } from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses'; 

export const ExpensesSummary = ({ expenseCount, total }) => (
  <div>
    <h1>Viewing {expenseCount} {expenseCount && expenseCount > 1 ? 'expenses' : 'expense' } totalling {numeral(total / 100).format('$0,0.00')} </h1>
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
