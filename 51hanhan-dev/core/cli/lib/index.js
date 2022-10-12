'use strict';

module.exports = core;

const semver = require('semver');
const colors = require('colors/safe');
const pkg = require('../package.json');
const log = require('@51hanhan-dev/log');
const constant = require('./const');

function core() {
    // console.log("exec core");
    try {
        checkPkgVersion();
        checkNodeVersion();
    }catch(e){
        log.error(e.message);
    }
}

function checkNodeVersion(){
    // 第一步，获取当前Node版本号
    const currentVersion = process.version;
    //console.log(process.version);
    // 第二步，比对最低版本号
    const lowestVersion = constant.LOWEST_NODE_VERSION;
    if(!semver.gte(currentVersion,lowestVersion)){
        throw new Error(colors.red(`需要安装 v${lowestVersion}以上版本的node.js`));
    }
}

function checkPkgVersion() {
    log.notice('cli',pkg.version);
}
