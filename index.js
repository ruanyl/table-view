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

  arr = (0, _arrayInverse2['default'])(arr);
  arr = arr.map(function (row) {
    if (defaultStyle.align === 'right') {
      return (0, _arrayTabular2['default'])(row).before();
    } else if (defaultStyle.align === 'left') {
      return (0, _arrayTabular2['default'])(row).after();
    }
  });
  arr = (0, _arrayInverse2['default'])(arr);

  function output() {
    return arr.map(function (row) {
      return row.join(' '.repeat(defaultStyle.margin));
    }).join('\n');
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
