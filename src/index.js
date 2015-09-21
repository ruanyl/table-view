import 'core-js/shim';
import inverse from 'array-inverse';
import tabular from 'array-tabular';

function tableView(arr, sty = {}) {
  let defaultStyle = {
    margin: 2,
    align: 'right'
  };
  defaultStyle = Object.assign(defaultStyle, sty);

  arr = inverse(arr);
  arr = arr.map((row) => {
    if (defaultStyle.align === 'right') {
      return tabular(row).before();
    } else if (defaultStyle.align === 'left') {
      return tabular(row).after();
    }
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

  return {
    get,
    output
  };
}

module.exports = tableView;
