var moment = require('moment');

// Check moment docs !!!

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current Timestamp', now.unix());

var timestamp = 1483618994;
var currentMoment = moment.unix(timestamp);

console.log('Current Moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
