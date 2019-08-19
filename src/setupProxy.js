const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/gateway', {
        target: 'http://192.168.1.5:8080',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/gateway": ""
        },
        // cookieDomainRewrite: "http://localhost:3000"
    }));
};

// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(proxy('/gateway', {
//         target: 'https://pctest.pashr.com.cn',
//         changeOrigin: true
//     }))
// }