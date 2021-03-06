import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: (props.expense && props.expense.description) || "",
      amount: (props.expense && parseFloat(props.expense.amount / 100)) || "",
      note: (props.expense && props.expense.note) || "",
      createdAt: (props.expense && moment(props.expense.createdAt)) || moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.description && this.state.amount) {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      this.setState(() => ({ error: "" }));
    } else {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => false}
        />

        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
