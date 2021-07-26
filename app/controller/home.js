const Controller = require('egg').Controller;

class HomeController extends Controller {
    async test () {
        this.ctx.body = '测试路由';
    }
    async index() {
        this.ctx.body = "<h1>hello world</h1>";
    }
}

module.exports = HomeController;