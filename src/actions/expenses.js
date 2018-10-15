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

const startEditExpense = ({ id, updates }) =>  {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense({id, updates}));
    });
  }
}

const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
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

const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        let expenses = [];
        snapshot.forEach(expense => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  }
}

export {
  addExpense,
  removeExpense,
  editExpense,
  startEditExpense,
  startAddExpense,
  startSetExpenses,
  setExpenses,
  startRemoveExpense
};
