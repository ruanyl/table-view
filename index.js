'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js/shim');

var _arrayInverse = require('array-inverse');

var _arrayInverse2 = _interopRequireDefault(_arrayInverse);

var _arrayTabular = require('array-tabular');

var _arrayTabular2 = _interopRequireDefault(_arrayTabular);

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
    var result = arr.reduce(function (tmpResult, row, rowNum) {
      var rowOutput = row.join(' '.repeat(margin));
      var borderTopStr = '';
      var borderBottomStr = '';
      var headerStr = '';

      if (borderLeft) {
        rowOutput = borderLeft + ' ' + rowOutput;
      }
      if (borderRight) {
        rowOutput = rowOutput + ' ' + borderRight;
      }
      tmpResult = tmpResult + '\n' + rowOutput;

      if (borderTop && rowNum === 0) {
        borderTopStr = borderTop.repeat(rowOutput.length);
        tmpResult = borderTopStr + tmpResult;
      }
      if (header && rowNum === 0) {
        headerStr = borderLeft + '-'.repeat(rowOutput.length - 2) + borderRight;
        tmpResult = tmpResult + '\n' + headerStr;
      }
      if (borderBottom && rowNum === arr.length - 1) {
        borderBottomStr = borderBottom.repeat(rowOutput.length);
        tmpResult = tmpResult + '\n' + borderBottomStr;
      }
      return tmpResult;
    }, '');

    return result;
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
