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

  /*if(hasHeader) {
    let headerArr = arr[0].map((ele) => {
      return '-'.repeat(ele.length);
    });
    arr.splice(1, 0, headerArr);
  }*/

  function output() {
    var result = arr.reduce(function (tmpResult, row, rowNum) {
      var rowOutput = row.join(' '.repeat(defaultStyle.margin));
      var borderTop = '';
      var borderBottom = '';
      var header = '';

      if (defaultStyle.borderLeft) {
        rowOutput = defaultStyle.borderLeft + ' ' + rowOutput;
      }
      if (defaultStyle.borderRight) {
        rowOutput = rowOutput + ' ' + defaultStyle.borderRight;
      }
      tmpResult = tmpResult + '\n' + rowOutput;

      if (defaultStyle.borderTop && rowNum === 0) {
        borderTop = defaultStyle.borderTop.repeat(rowOutput.length);
        tmpResult = borderTop + tmpResult;
      }
      if (hasHeader && rowNum === 0) {
        header = defaultStyle.borderLeft + '-'.repeat(rowOutput.length - 2) + defaultStyle.borderRight;
        tmpResult = tmpResult + '\n' + header;
      }
      if (defaultStyle.borderBottom && rowNum === arr.length - 1) {
        borderBottom = defaultStyle.borderBottom.repeat(rowOutput.length);
        tmpResult = tmpResult + '\n' + borderBottom;
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
