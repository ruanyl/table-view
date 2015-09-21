'use strict';
var tableView = require('../index');

var arr = [
  ['111', '222', '333', '4444'],
  ['1111111', '222222', '333333', '4444'],
  ['111', '222', '33333333333', '4444'],
  ['111', '222', '333', '444444444444']
];
console.log(tableView(arr).style({margin: 4}).output());
