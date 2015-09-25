'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js/shim');

var _arrayInverse = require('array-inverse');

var _arrayInverse2 = _interopRequireDefault(_arrayInverse);

var _arrayTabular = require('array-tabular');

var _arrayTabular2 = _interopRequireDefault(_arrayTabular);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function tableView(arr, _ref) {
  var _ref$margin = _ref.margin;
  var margin = _ref$margin === undefined ? 2 : _ref$margin;
  var _ref$align = _ref.align;
  var align = _ref$align === undefined ? 'right' : _ref$align;
  var _ref$header = _ref.header;
  var header = _ref$header === undefined ? '' : _ref$header;
  var _ref$borderTop = _ref.borderTop;
  var borderTop = _ref$borderTop === undefined ? '' : _ref$borderTop;
  var _ref$borderRight = _ref.borderRight;
  var borderRight = _ref$borderRight === undefined ? '' : _ref$borderRight;
  var _ref$borderBottom = _ref.borderBottom;
  var borderBottom = _ref$borderBottom === undefined ? '' : _ref$borderBottom;
  var _ref$borderLeft = _ref.borderLeft;
  var borderLeft = _ref$borderLeft === undefined ? '' : _ref$borderLeft;

  arr = (0, _arrayInverse2['default'])(arr);
  arr = arr.map(function (row) {
    if (align === 'right') {
      return (0, _arrayTabular2['default'])(row).before();
    } else if (align === 'left') {
      return (0, _arrayTabular2['default'])(row).after();
    }
  });
  arr = (0, _arrayInverse2['default'])(arr);

  function output() {
    var result = arr.map(function (row) {
      return ' ' + row.join(' '.repeat(margin)) + ' ';
    }).reduce(function (tmpResult, row, rowNum) {
      if (borderTop && rowNum === 0) {
        tmpResult.push(borderLeft + borderTop.repeat(row.length) + borderRight);
      }
      tmpResult.push(borderLeft + row + borderRight);
      if (header && rowNum === 0) {
        tmpResult.push(borderLeft + '-'.repeat(row.length) + borderRight);
      }
      if (borderBottom && rowNum === arr.length - 1) {
        tmpResult.push(borderLeft + borderBottom.repeat(row.length) + borderRight);
      }
      return tmpResult;
    }, []);

    return result.join('\n');
  }

  function get() {
    return arr;
  }

  return {
    get: get,
    output: output
  };
}

module.exports = tableView;
