const robotjs = require("robotjs");

let bitmap = robotjs.screen.capture(250, 250, 500, 500);
console.log(bitmap.colorAt(0, 0));