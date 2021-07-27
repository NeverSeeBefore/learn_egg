const Service = require('egg').Service;

class NewsService extends Service {

    // 分页获取列表数据
    async list(page = 1) {
        const { serverUrl, pageSize } = this.config.news;
        const { data: idList } = await this.ctx.curl(`${serverUrl}/public/news/topstories.json`, {
            data: {
                orderBy: '"$keys"',
                startAt: `${pageSize * (page - 1)}`,
                endAt: `${pageSize * page - 1}`
            },
            dataType: 'json'
        });
        const newList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${key}.json`;
                return this.ctx.curl(url, { dataType: 'json' });
            })
        );
        return newList.map(res => res.data);
    }

    // 获取列表数据
    async stories(params) {
        const { serverUrl } = this.config.news;
        const res = await this.ctx.curl(`${serverUrl}/public/news/topstories.json`, {
            dataType: 'json'
        });
        return res.data;
    }

    // 获取每一项数据
    async item(fileName) {
        const { serverUrl } = this.config.news;
        const res = await this.ctx.curl(`${serverUrl}/public/news/${fileName}`, {
            dataType: 'json'
        });
        return res.data;
    }
}

module.exports = NewsService;
