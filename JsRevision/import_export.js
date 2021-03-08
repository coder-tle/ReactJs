// Resource : https://www.geeksforgeeks.org/javascript-importing-and-exporting-modules/

// https://www.taniarascia.com/javascript-modules-import-export/
const lib = require('./library.js');

let length = 10;
let breadth = 5;

lib.area(length, breadth);
lib.perimeter(length, breadth);
