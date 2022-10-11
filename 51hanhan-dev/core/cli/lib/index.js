'use strict';

module.exports = core;

function core() {
    // console.log("exec core");
    checkPkgVersion();
}
const pkg = require('../package.json');
function checkPkgVersion() {
    console.log(pkg.version);
}
