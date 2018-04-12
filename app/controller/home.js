'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.response.body = 'hi, egg';
  }
}

module.exports = HomeController;
