const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/v3',
    proxy({
      target: 'https://api.yelp.com',
      changeOrigin: true
    })
  );
};
