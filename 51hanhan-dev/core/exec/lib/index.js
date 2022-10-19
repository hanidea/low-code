'use strict';

const path = require('path');
const Package = require('@51hanhan-dev/package');
const log = require('@51hanhan-dev/log');

const SETTINGS = {
    init:"@imooc-cli/init"
}

const CACHE_DIR = 'dependencies';

async function exec() {
    let targetPath = process.env.CLI_TARGET_PATH;
    const homePath = process.env.CLI_HOME_PATH;
    let storeDir = ''
    log.verbose('targetPath',targetPath);
    log.verbose('homePath',homePath);
    let pkg;
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
        pkg = new Package({
            targetPath,
            storeDir,
            packageName,
            packageVersion
        });
        if(await pkg.exists()){
            //更新package
            await pkg.update();
        }else{
            //安装package
            await pkg.install();
        }
    } else {
        pkg = new Package({
            targetPath,
            packageName,
            packageVersion
        });
    }
    //console.log(await pkg.exists());
    const rootFile =  pkg.getRootFilePath();
    if(rootFile){
        //在当前进程中调用
        require(rootFile).apply(null, arguments);
        //在node子进程中调用
    }    
}

module.exports = exec;