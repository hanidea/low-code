'use strict';

function init (projectName,cmdObj) {
    console.log('init001', projectName, cmdObj.force, process.env.CLI_TARGET_PATH);
}

module.exports = init;
