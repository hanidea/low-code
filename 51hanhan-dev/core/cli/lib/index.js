'use strict';

module.exports = core;

function core() {
    // console.log("exec core");
    checkPkgVersion();
}
const pkg = require('../package.json');
const log = require('@51hanhan-dev/log');
function checkPkgVersion() {
    log.notice('cli',pkg.version);
}
