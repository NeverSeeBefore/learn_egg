
// 防爬虫中间件
module.exports = (options, app) => {
    return async function RobotMiddleware (ctx, next) {
        const source = ctx.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));

        if (match) {
            ctx.status = 403;
            ctx.message = 'Go away, robot.';
        }
        else {
            await next();
        }
    }
}