import 'core-js/shim';
import inverse from 'array-inverse';
import tabular from 'array-tabular';

function tableView(arr, {
  margin = 2,
  align = 'right',
  header = '',
  borderTop = '',
  borderRight = '',
  borderBottom = '',
  borderLeft = ''
}) {

  arr = inverse(arr);
  arr = arr.map((row) => {
    if (align === 'right') {
      return tabular(row).before();
    } else if (align === 'left') {
      return tabular(row).after();
    }
  });
  arr = inverse(arr);

  function output() {
    let result = arr.reduce((tmpResult, row, rowNum) => {
      let rowOutput = row.join(' '.repeat(margin));
      let borderTopStr = '';
      let borderBottomStr = '';
      let headerStr = '';

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
      if (borderBottom && rowNum === (arr.length - 1)) {
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
    get,
    output
  };
}

module.exports = tableView;
