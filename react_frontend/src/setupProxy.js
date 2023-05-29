const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      /*https://cosmic-itechnology.onrender.com'*/
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};