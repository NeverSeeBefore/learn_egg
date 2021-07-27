

module.exports = app => {
    const { router, controller } = app;

    router.get('/', controller.home.index);

    // static 插件默认映射 /public/* -> app/public/* 目录

    router.get('/news', controller.news.list);


    router.get('/stories', controller.news.stories);

    router.get('/item/:itemName', controller.news.item)
}
