const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      /*https://cosmic-itechnology.onrender.com'*/
      /*http://localhost:5000*/
      target: 'https://cosmic-itechnology.onrender.com',
      changeOrigin: true,
    })
  );
};