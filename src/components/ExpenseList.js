import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getVisibleExpenses } from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-item__body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map((expense, index) => (
          <ExpenseListItem key={index} {...expense} />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: getVisibleExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
