const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cosmic-itechnology.onrender.com',
      changeOrigin: true,
    })
  );
};