const proxy = require('http-proxy-middleware');
const isProduction =
  process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

module.exports = function(app) {
  if (!isProduction) {
    app.use(
      proxy('/posts', {
        target: 'http://jsonplaceholder.typicode.com/',
        /*onProxyReq: function(proxyReq, req, res) {
          proxyReq.setHeader('Origin','https://web.dev.vitality.aia.co.kr:8443')
        },*/
        changeOrigin: true
      })
    );
    app.use(
      proxy('/analysis', {
        target: 'http://localhost:8090',
        /*onProxyReq: function(proxyReq, req, res) {
          proxyReq.setHeader('Origin','https://web.dev.vitality.aia.co.kr:8443')
        },*/
        changeOrigin: true
      })
    );
  }
};

