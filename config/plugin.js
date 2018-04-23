'use strict';

// had enabled by egg
// exports.static = true;

// mysql配置
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
