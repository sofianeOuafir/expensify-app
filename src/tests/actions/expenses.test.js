import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense({
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expense = expenses[0];
  const action = addExpense(expense);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense
  });
});

test("should add expense to database and store", () => {
  const { description, note, amount, createdAt } = expenses[0];
  const expense = {
    description,
    note,
    amount,
    createdAt
  };

  startAddExpense(expense);
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const { description, note, amount, createdAt } = expenses[0];
  const expense = {
    description,
    note,
    amount,
    createdAt
  };
  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(
        addExpense({
          id: expect.any(String),
          ...expense
        })
      );
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expense);
      done();
    });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});
