const webpack = require('webpack');

module.exports = {
  // other webpack config options...

  plugins: [
    // Provide Buffer globally
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
