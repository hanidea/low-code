'use strict';

const path = require('path')
const pkgDir = require('pkg-dir').sync;
const npminstall = require('npminstall');
const formatPath = require('@51hanhan-dev/format-path');
const { getDefaultRegistry} = require('@51hanhan-dev/get-npm-info');
const {isObject} = require('@51hanhan-dev/utils');

class Package {
    constructor(options){
        if(!options){
            throw new Error('Package类的options参数不能为空!');
        }
        if(!isObject(options)){
            throw new Error('Package类的options参数必须为对象');
        }
        //console.log('Package constructor')
        //package的目标路径
        this.targetPath = options.targetPath;
        //package的缓存路径
        this.storeDir = options.storeDir;
        //package的name
        this.packageName = options.packageName;
        //package的version
        this.packageVersion = options.packageVersion;
    }

//判断当前Package是否存在
exist() {}
//安装Package
install() {
    npminstall({
      root: this.targetPath,
      storeDir: this.storeDir,
      registry: getDefaultRegistry(),
      pkgs: [{
        name: this.packageName,
        version: this.packageVersion,
      }],
    })
}
//更新Package
update() {}
//获取入口文件的路径
getRootFilePath() {
     // 1. 获取package.json所在目录
     const dir = pkgDir(this.targetPath);
     if (dir) {
       // 2. 读取package.json
       const pkgFile = require(path.resolve(dir, 'package.json'));
       //3. 寻找main/lib
       if (pkgFile && pkgFile.main) {
         // 4. 路径的兼容(macOS/windows)
         return formatPath(path.resolve(dir, pkgFile.main));
       }
     }
    return null;
}

}

module.exports = Package;
