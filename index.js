'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js/shim');

var _arrayInverse = require('array-inverse');

var _arrayInverse2 = _interopRequireDefault(_arrayInverse);

var _arrayTabular = require('array-tabular');

var _arrayTabular2 = _interopRequireDefault(_arrayTabular);

function tableView(arr) {
  var sty = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var defaultStyle = {
    margin: 2,
    align: 'right'
  };
  defaultStyle = _Object$assign(defaultStyle, sty);
  var hasHeader = defaultStyle.header !== undefined ? true : false;

  arr = (0, _arrayInverse2['default'])(arr);
  arr = arr.map(function (row) {
    if (defaultStyle.align === 'right') {
      return (0, _arrayTabular2['default'])(row).before();
    } else if (defaultStyle.align === 'left') {
      return (0, _arrayTabular2['default'])(row).after();
    }
  });
  arr = (0, _arrayInverse2['default'])(arr);

  if (hasHeader) {
    var headerArr = arr[0].map(function (ele) {
      return '-'.repeat(ele.length);
    });
    arr.splice(1, 0, headerArr);
  }

  function output() {
    var result = '';
    var arrOutput = arr.map(function (row, rowNum) {
      var rowOutput = hasHeader && rowNum === 1 ? row.join('-'.repeat(defaultStyle.margin)) : row.join(' '.repeat(defaultStyle.margin));

      if (defaultStyle.borderLeft) {
        rowOutput = defaultStyle.borderLeft + ' ' + rowOutput;
      }

      if (defaultStyle.borderRight) {
        rowOutput = rowOutput + ' ' + defaultStyle.borderRight;
      }
      return rowOutput;
    });
    result = arrOutput.join('\n');

    if (defaultStyle.borderTop) {
      result = defaultStyle.borderTop.repeat(arrOutput[0].length) + '\n' + result;
    }
    if (defaultStyle.borderBottom) {
      result = result + '\n' + defaultStyle.borderBottom.repeat(arrOutput[0].length);
    }

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
