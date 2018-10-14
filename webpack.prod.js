const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')


module.exports = merge(common, {
  mode : 'production',
  plugins : (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ])
});