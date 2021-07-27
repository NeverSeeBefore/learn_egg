const fs = require('fs');
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const dataList = await ctx.service.news.list(page);
        await this.ctx.render('/news/list.tpl', {
            list: dataList
        });
    }

    async stories() {
        // 分页处理，暂时忽略，page
        this.ctx.body = await this.ctx.service.news.stories(1);
    }

    async item() {
        this.ctx.body = await this.ctx.service.news.item(this.ctx.params.itemName);
    }
}

module.exports = NewsController;
