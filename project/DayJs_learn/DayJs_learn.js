const dayjs2 = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs2.extend(utc);
dayjs2.extend(timezone);

console.log(dayjs2().format());
console.log(dayjs2().tz("America/New_York").format());