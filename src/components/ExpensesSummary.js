import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses'; 

export const ExpensesSummary = ({ expenseCount, total }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseCount && expenseCount > 1 ? 'expenses' : 'expense' } totalling <span>{numeral(total / 100).format('$0,0.00')}</span></h1>
      <div className="page-header__actions">
        <Link to="/create" className="button">
          Add Expense
        </Link>
      </div>
    </div> 
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
