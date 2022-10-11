#! /usr/bin/env node

// const utils = require('@51hanhan-dev/utils');
//
// utils();
// console.log('hello 51hanhan-cli cli 2');

const importLocal = require('import-local');

if (importLocal(__filename)) {
    require('npmlog').info('cli', '正在使用本地版本');
} else {
    require('../lib')(process.argv.slice(2));
}
