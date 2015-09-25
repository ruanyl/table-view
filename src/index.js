import 'core-js/shim';
import inverse from 'array-inverse';
import tabular from 'array-tabular';
import chalk from 'chalk';

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
    let result = arr.map((row) => {
      return ' ' + row.join(' '.repeat(margin)) + ' ';
    }).reduce((tmpResult, row, rowNum) => {
      if (borderTop && rowNum === 0) {
        tmpResult.push(borderLeft + borderTop.repeat(row.length) + borderRight);
      }
      tmpResult.push(borderLeft + row + borderRight);
      if (header && rowNum === 0) {
        tmpResult.push(borderLeft + '-'.repeat(row.length) + borderRight);
      }
      if (borderBottom && rowNum === (arr.length - 1)) {
        tmpResult.push(borderLeft + borderBottom.repeat(row.length) + borderRight);
      }
      return tmpResult;
    }, []);

    return result.join('\n');
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
