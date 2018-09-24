const moment = require.requireActual('moment');

export default (timestamps = 0) => {
  return moment(timestamps);
};