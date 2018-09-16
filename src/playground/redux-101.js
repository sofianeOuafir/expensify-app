import { createStore } from 'redux';

// Action generator - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// Pure functions: 
// 1. Reducers are pure functions
// 2. Never change paramater passed in

const countReducers = (state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET': 
      return {
        count: 0
      };
    case 'SET': 
      return {
        count: action.count
      }
    default: 
      return state;
  }
}

const store = createStore(countReducers);

console.log(store.getState());


store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(incrementCount({ incrementBy: 20 }));

console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 5 }));

console.log(store.getState());

store.dispatch(decrementCount());

console.log(store.getState());

store.dispatch(resetCount());

console.log(store.getState());

store.dispatch(setCount({ count: 102 }));

console.log(store.getState());