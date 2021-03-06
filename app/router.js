'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./routes/index')(app);
    require('./routes/user')(app);
};
