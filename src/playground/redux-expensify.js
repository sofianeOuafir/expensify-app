import { store } from '../store/configureStore';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { addExpense, removeExpense, editExpense } from '../actions/expenses';
import { getVisibleExpenses } from '../selectors/expenses';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseItem1 = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: 5000
}));
const expenseItem2 = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300,
  createdAt: 3000
}));
// store.dispatch(removeExpense({
//   id: expenseItem2.expense.id
// }));

// store.dispatch(removeExpense({
//   id: expenseItem1.expense.id
// }));

// store.dispatch(editExpense({
//   id: expenseItem1.expense.id,
//   updates: {
//     description: 'House',
//     amount: 5000000
//   }
// }));

store.dispatch(setStartDate({
  startDate: 0
}));
store.dispatch(setEndDate({
  endDate: 5000
}));
store.dispatch(sortByDate());



// store.dispatch(sortByAmount());
// store.dispatch(setEndDate({
//   endDate: 123
// }));
