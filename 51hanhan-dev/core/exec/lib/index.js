'use strict';

const cp = require('child_process');
const path = require('path');
const Package = require('@51hanhan-dev/package');
const log = require('@51hanhan-dev/log');

const SETTINGS = {
    init:""
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
        console.log('in');
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
        try{
        //在当前进程中调用
        //require(rootFile).call(null, Array.from(arguments));
        //在node子进程中调用
        //cp.fork()
        const args = Array.from(arguments);
        const cmd = args[args.length - 1];
        const o = Object.create(null);
        Object.keys(cmd).forEach(key => {
            if (cmd.hasOwnProperty(key) &&
            !key.startsWith('_') &&
            key !== 'parent') {
            o[key] = cmd[key];
            }
        });
        args[args.length - 1] = o;
            const code = `require('${rootFile}').call(null, ${JSON.stringify(args)})`;
            const child = cp.spawn('node', ['-e', code], {
            cwd: process.cwd(),
            stdio:'inherit',
            
        });

        child.on('error', e=>{
            log.error(e.message);
            process.exit(1);
        })
        child.on('exit',e=>{
            log.verbose('命令执行成功:'+e);
            process.exit(e);
        })
        } catch(e){
            log.error(e.message);
        }
        
    }    
}

module.exports = exec;