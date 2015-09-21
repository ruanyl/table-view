table-view
========
[![build status](https://secure.travis-ci.org/ruanyl/table-view.svg)](http://travis-ci.org/ruanyl/table-view)
[![NPM version](https://badge.fury.io/js/table-view.svg)](http://badge.fury.io/js/table-view)

array table view

## Installation

This module is installed via npm:

``` bash
$ npm install table-view
```

## Example Usage

``` js
var tableView = require('table-view');

var arr = [
  ['111', '222', '333', '4444'],
  ['1111111', '222222', '333333', '4444'],
  ['111', '222', '33333333333', '4444'],
  ['111', '222', '333', '444444444444']
];
console.log(tableView(arr).style({margin: 4}).output());
```

======>

```
    111       222            333            4444
1111111    222222         333333            4444
    111       222    33333333333            4444
    111       222            333    444444444444
```
