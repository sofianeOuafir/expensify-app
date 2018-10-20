import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import Modal from 'react-modal';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState(() => ({modalIsOpen: true}));
  }

  closeModal = () => {
    this.setState(() => ({modalIsOpen: false}));;
  }

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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.editExpense}
          />
          <button className="button button--remove" onClick={this.openModal}>Remove Expense</button>
          <Modal
            className="modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Remove Expense"
          >
            <h1 className="modal__title">Remove Expense</h1>
            <p className="modal__content">Are you sure you want to remove this expense?</p>
            <div className="modal__button-group">
              <button className="button button--remove" onClick={this.removeExpense}>Remove</button>
              <button className="button" onClick={this.closeModal}>Cancel</button>
            </div>
          </Modal>
        </div>
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
