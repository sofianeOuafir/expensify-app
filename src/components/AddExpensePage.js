import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

class AddExpensePage extends React.Component {
  render () {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={(expense) => {
            this.props.dispatch(addExpense(expense));
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

export default connect()(AddExpensePage);
