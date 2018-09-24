import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  amount: 195,
  createdAt: 0,
  note: ''
}, {
  id: '2',
  description: 'Rent',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
  note: ''
}, {
  id: '3',
  description: 'Credit Card',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf(),
  note: ''
}];
