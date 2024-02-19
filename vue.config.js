module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/draw/' : '/',
  pages: {
    index: 'src/index/main.js',
    gift: 'src/gift/main.js'
  }
};
