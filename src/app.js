import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({
  description: 'Water bill',
  amount: 10000,
  createdAt: 3000
}));
store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 20000,
  createdAt: 4000
}));
store.dispatch(addExpense({
  description: 'Rent ',
  amount: 78000,
  createdAt: 2000
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));