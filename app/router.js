
module.exports = app => {
    const { router, controller } = app;
    router.get('/test', 'home.test');
    router.get('/', controller.home.index);
}