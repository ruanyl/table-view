'use strict';
var tableView = require('../index');

var arr = [
  ['name', 'class', 'age', 'gender'],
  ['111', '222', '333', '4444'],
  ['1111111', '222222', '333333', '4444'],
  ['111', '222', '33333333333', '4444'],
  ['111', '222', '333', '444444444444']
];
var style = {
  margin: 4,
  align: 'left',
  header: 'top',
  borderLeft: '|',
  borderRight: '|',
  borderTop: '-',
  borderBottom: '-'
};
console.log(tableView(arr, style).output());
