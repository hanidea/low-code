'use strict';

const path = require('path');
const Package = require('@51hanhan-dev/package');
const log = require('@51hanhan-dev/log');

const SETTINGS = {
    init:"@51hanhan-dev/init"
}

const CACHE_DIR = 'dependencies';

function exec() {
    let targetPath = process.env.CLI_TARGET_PATH;
    const homePath = process.env.CLI_HOME_PATH;
    let storeDir = ''
    log.verbose('targetPath',targetPath);
    log.verbose('homePath',homePath);
    
    const cmdObj = arguments[arguments.length-1];
    const cmdName = cmdObj.name();
    const packageName = SETTINGS[cmdName];
    const packageVersion = 'latest';

    if(!targetPath){
        //生成缓存路径
        targetPath = path.resolve(homePath,CACHE_DIR);
        storeDir = path.resolve(targetPath,'node_modules');
        //console.log(targetPath,storeDir);
        log.verbose('targetPath',targetPath);
        log.verbose('storeDir',storeDir);
    }

    const pkg = new Package({
        targetPath,
        storeDir,
        packageName,
        packageVersion

    });
    console.log(pkg.getRootFilePath());
}

module.exports = exec;