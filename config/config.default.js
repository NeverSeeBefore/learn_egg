module.exports.keys = '<此处改为你自己的 Cookie 安全字符串>';
module.exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};
module.exports.news = {
    pageSize: 5,
    serverUrl: 'http://127.0.0.1:7001',
};
module.exports.middleware = [
    'robot'
];
module.exports.robot = {
    ua: [
        /Baiduspider/i
    ]
}
