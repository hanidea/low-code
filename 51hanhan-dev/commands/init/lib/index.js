'use strict';

module.exports = init;

function init (projectName,cmdObj) {
    console.log('init',projectName,cmdObj.force,cmdObj.parent.targetPath);
}

module.exports = init;