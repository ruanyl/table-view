'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

require('core-js/shim');

var _arrayInverse = require('array-inverse');

var _arrayInverse2 = _interopRequireDefault(_arrayInverse);

var _arrayTabular = require('array-tabular');

var _arrayTabular2 = _interopRequireDefault(_arrayTabular);

function tableView(arr) {
  var defaultStyle = { margin: 2 };
  arr = (0, _arrayInverse2['default'])(arr);
  arr = arr.map(function (row) {
    return (0, _arrayTabular2['default'])(row).before();
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

  function style() {
    var sty = arguments.length <= 0 || arguments[0] === undefined ? { margin: 2 } : arguments[0];

    defaultStyle = _Object$assign(defaultStyle, sty);

    return {
      output: output
    };
  }

  return {
    get: get,
    style: style,
    output: output
  };
}

module.exports = tableView;
