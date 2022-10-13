
const lib = require('51hanhan-test-lib');
//注册一个命令 51hanhan-test init
const argv = require('process').argv;

//console.log(argv);

const command = argv[2];
const options = argv.slice(3);
if(options.length > 1){
    let [option, param] = options;

    option = option.replace('--','')
    //console.log(option,param);
    //console.log(lib[command]);
    if(command){
    if(lib[command]){
        lib[command]({option,param});
    }else{
        console.log('无效的命令');
    }}else{
        console.log('请输入命令')
    }
}

//实现参数解析 --version 和 init --name
if(command.startsWith('--')||command.startsWith('-')){
    const globalOption = command.replace(/--|-/g,'');
    //console.log(globalOption);
    if (globalOption === 'version' || globalOption === 'V'){
        console.log('1.0.0');
    }
}



// console.log(lib.sum(1,2));
// console.log('welcome 51hanhan-test');