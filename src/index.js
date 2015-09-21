import 'core-js/shim';
import inverse from 'array-inverse';
import tabular from 'array-tabular';

function tableView(arr) {
  var defaultStyle = {margin: 2};
  arr = inverse(arr);
  arr = arr.map((row) => {
    return tabular(row).before();
  });
  arr = inverse(arr);

  function output() {
    return arr.map((row) => {
      return row.join(' '.repeat(defaultStyle.margin));
    }).join('\n');
  }

  function get() {
    return arr;
  }

  function style(sty = {margin: 2}) {
    defaultStyle = Object.assign(defaultStyle, sty);

    return {
      output
    };
  }

  return {
    get,
    style,
    output
  };
}

module.exports = tableView;


