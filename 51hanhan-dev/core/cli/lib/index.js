'use strict';

module.exports = core;

const path = require('path');
const semver = require('semver');
const colors = require('colors/safe');
const userHome = require('user-home');
const pathExists = require('path-exists').sync;
const commander = require('commander');
let args,config;
const pkg = require('../package.json');
const log = require('@51hanhan-dev/log');
const constant = require('./const');
const dotenv = require("dotenv");
const init = require('@51hanhan-dev/init')

const program = new commander.Command();

async function core() {
    // console.log("exec core");
    try {
        checkPkgVersion();
        checkNodeVersion();
        checkRoot();
        checkUserHome();
        //checkInputArgs()
        checkEnv();
        await checkGlobalUpdate()
        registerCommand();
        //log.verbose('debug','test debug log');
    }catch(e){
        log.error(e.message);
    }
}

function registerCommand(){
    program
       .name(Object.keys(pkg.bin)[0])
       .usage('<command>[options]')
       .version(pkg.version)
       .option('-d,--debug','是否开启调试模式',false)
       .option('-tp,--targetPath <targetPath>','是否制定本地调试文件路径','');

    program
       .command('init [projectName]')
       .option('-f, --force','是否强制初始化项目')
       .action(init);

    //开启debug模式
    program.on('option:debug',function(){
        if(program.debug){
            program.env.LOG_LEVEL = 'verbose';
        }else{
            process.env.LOG_LEVEL = 'info';
        }
        log.level = process.env.LOG_LEVEL;
        log.verbose('test');
    });

    //未知命令的监听
    program.on('command:*',function(obj){
       const availableCommands = program.commands.map(cmd=>cmd.name());
       console.log(colors.red('未知的命令:'+obj[0]));
       if(availableCommands.length>0){
        console.log(colors.red('可用命令:'+availableCommands.join(',')));
       }
    })
    
    if(process.args && process.args.length<1){
        program.outputHelp();
        console.log();
    }
    program.parse(process.argv);
}

async function checkGlobalUpdate(){
    const currentVersion = pkg.version;
    const npmName = pkg.name;
    const { getNpmSemverVersion } = require('@51hanhan-dev/get-npm-info');
    const lastVersion = await  getNpmSemverVersion(currentVersion,npmName);
    if(lastVersion && semver.gte(lastVersion,currentVersion)){
        log.warn(colors.yellow(`请手动更新${npmName},当前版本:${currentVersion},最新版本:${lastVersion} 
        更新命令: npm install -g ${npmName}`));
    };

}

function checkEnv(){
    const dotenv = require('dotenv');
    const dotenvPath = path.resolve(userHome,'.env');
    if(pathExists(dotenvPath)){
        dotenv.config({
            path: dotenvPath,
        });
    }
    createDefaultConfig();
    log.verbose('环境变量', process.env.CLI_HOME_PATH);
}

function createDefaultConfig(){
    const cliConfig={
        home:userHome,
    };
    if(process.env.CLI_HOME){
        cliConfig['cliHome'] = path.join(userHome,process.env.CLI_HOME);
    }else{
        cliConfig['cliHome'] = path.join(userHome,constant.DEFAULT_CLI_HOME);
    }
    process.env.CLI_HOME_PATH = cliConfig.cliHome;
    //return cliConfig
}

function checkInputArgs(){
    const minimist = require('minimist');
    args = minimist(process.argv.slice(2));
    checkArgs();
}

function checkArgs(){
    if(args.debug){
        process.env.LOG_LEVEL = 'verbose';
    }else{
        process.env.LOG_LEVEL = 'info';
    }
    log.level = process.env.LOG_LEVEL;
}

function checkUserHome(){
    if(!userHome || !pathExists(userHome)){
        throw new Error(colors.red('当前登录用户主目录不存在'));
    }
    //console.log(userHome);
}

function checkRoot(){
    //console.log(process.geteuid());
    const rootCheck = require('root-check');
    rootCheck();
    //console.log(process.geteuid());

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
