'use strict';
const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1523429948759_6142';

    // add your config here
    config.middleware = [];
    // 数据库配置
    config.mysql = {
        // host
        host: 'rm-bp1c618b44630t89w.mysql.rds.aliyuncs.com',
        // 端口号
        port: '1433',
        // 用户名
        user: 'ysy_server',
        // 密码
        password: 'ysy94101YSY',
        // 数据库名
        database: 'ysy_server',
    };
    //静态资源配置
    config.static = {
        prefix:'/public/',
        dir: path.join(appInfo.baseDir, 'app/public')
    };
    //模板配置
    config.view = {
        root: path.join(appInfo.baseDir, 'app/view'),
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        },
    };
    //前端部署配置
    config.assets = {
        devServer: 'roadhog server',
        devServerPort: '8000',
    };

    return config;
};
