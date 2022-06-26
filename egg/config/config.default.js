/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1655693439246_6773';

  // add your middleware config here
  config.middleware = ['httpLog'];
  config.httpLog = {
    type: 'all'
  }
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
     mapping: {
      ".html":"ejs"
     },
     root:[
       path.join(appInfo.baseDir,"app/html"),
       path.join(appInfo.baseDir,"app/view"),
     ].join(",")
  };

  config.ejs = {
    //delimiter: "$"
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir,"app/assets")
  };

  config.session = {
    key:"HAN_SESS",
    httpOnly: true,
    maxAge: 1000 * 50,
    renew: true
  }

  config.auth = {
    exclude:['/home','/user','/login','/logout']
  }

  config.mysql = {
    app: true,
    agent: false,
    client:{
      host:'127.0.0.1',
      port: '3306',
      user: 'root',
      password:'junjie',
      database:'egg'
    }
  }

  config.sequelize = {
    dialect:'mysql',
    host:'127.0.0.1',
    port:'3306',
    user: 'root',
    password:'junjie',
    database:'egg',
    define:{
      timestamps: false,
      freezeTableName: true
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
