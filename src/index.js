import 'core-js/shim';
import inverse from 'array-inverse';
import tabular from 'array-tabular';

function tableView(arr, sty = {}) {
  let defaultStyle = {
    margin: 2,
    align: 'right'
  };
  defaultStyle = Object.assign(defaultStyle, sty);
  let hasHeader = defaultStyle.header !== undefined ? true : false;

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
    let isHeader = hasHeader;
    return arr.map((row) => {
      let rowOutput = row.join(' '.repeat(defaultStyle.margin));
      if(isHeader) { // if it is the first row of the array
        rowOutput = rowOutput + '\n' + '-'.repeat(rowOutput.length);
        isHeader = false;
      }
      return rowOutput;
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
