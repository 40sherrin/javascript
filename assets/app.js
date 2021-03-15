const months = [
  'January', 
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const getDay = new Date().getDay();
const getMonth = new Date().getMonth();

console.log(days[getDay])
console.log(months[getMonth])
