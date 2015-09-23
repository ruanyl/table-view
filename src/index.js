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
    let result = arr.reduce((tmpResult, row, rowNum) => {
      let rowOutput = row.join(' '.repeat(defaultStyle.margin));
      let borderTop = '';
      let borderBottom = '';
      let header = '';

      if(defaultStyle.borderLeft) {
        rowOutput = defaultStyle.borderLeft + ' ' + rowOutput;
      }
      if(defaultStyle.borderRight) {
        rowOutput = rowOutput + ' ' + defaultStyle.borderRight;
      }
      tmpResult = tmpResult + '\n' + rowOutput;

      if(defaultStyle.borderTop && rowNum === 0) {
        borderTop = defaultStyle.borderTop.repeat(rowOutput.length);
        tmpResult = borderTop + tmpResult;
      }
      if(hasHeader && rowNum === 0) {
        header = defaultStyle.borderLeft + '-'.repeat(rowOutput.length - 2) + defaultStyle.borderRight;
        tmpResult = tmpResult + '\n' + header;
      }
      if(defaultStyle.borderBottom && rowNum === (arr.length - 1)) {
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
    get,
    output
  };
}

module.exports = tableView;
