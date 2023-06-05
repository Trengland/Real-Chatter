const moment = require('moment');

// Format the timestamp to a desired format
const formatTimestamp = (timestamp) => {
  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
};


module.exports = { formatTimestamp };