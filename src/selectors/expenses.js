import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const matchStartDate = startDate ? startDate.isSameOrBefore(expense.createdAt, 'day') : true;
    const matchEndDate = endDate ? endDate.isSameOrAfter(expense.createdAt, 'day') : true;
    const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
    return matchText && matchStartDate && matchEndDate;
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export { getVisibleExpenses };