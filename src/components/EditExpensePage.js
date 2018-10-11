import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  editExpense = expense => {
    this.props.editExpense(this.props.expense.id, expense).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  removeExpense = () => {
    this.props.removeExpense(this.props.expense.id).then(() => {
      this.props.history.push("/dashboard");
    });
  };
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.editExpense} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editExpense: (id, expense) => {
      return dispatch(
        startEditExpense({
          id,
          updates: expense
        })
      );
    },
    removeExpense: id => {
      return dispatch(
        startRemoveExpense({
          id
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
