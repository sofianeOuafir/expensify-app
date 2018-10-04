import uuid from "uuid";
import database from "../firebase/firebase";

const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = ({ id, updates }) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export { addExpense, removeExpense, editExpense, startAddExpense };
