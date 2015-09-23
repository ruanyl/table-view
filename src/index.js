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

  if(hasHeader) {
    let headerArr = arr[0].map((ele) => {
      return '-'.repeat(ele.length);
    });
    arr.splice(1, 0, headerArr);
  }

  function output() {
    let result = '';
    let arrOutput = arr.map((row, rowNum) => {
      let rowOutput = hasHeader && rowNum === 1 ?
        row.join('-'.repeat(defaultStyle.margin)) :
        row.join(' '.repeat(defaultStyle.margin));

      if(defaultStyle.borderLeft) {
        rowOutput = defaultStyle.borderLeft + ' ' + rowOutput;
      }

      if(defaultStyle.borderRight) {
        rowOutput = rowOutput + ' ' + defaultStyle.borderRight;
      }
      return rowOutput;
    });
    result = arrOutput.join('\n');

    if(defaultStyle.borderTop) {
      result = defaultStyle.borderTop.repeat(arrOutput[0].length) + '\n' + result;
    }
    if(defaultStyle.borderBottom) {
      result = result + '\n' + defaultStyle.borderBottom.repeat(arrOutput[0].length);
    }

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
