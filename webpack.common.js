const appPath = `${__dirname}/src`
const distPath = `${__dirname}/dist`
const exclude = /node_modules/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: appPath,
  entry: {
    app: ['babel-polyfill', './index.js'],
  },
  output: {
    path: distPath,
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=semantic/dest/themes/default/assets/fonts/[name].[ext]'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath : 'images/',
                }
            }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
     jQuery: 'jquery'
     })
  ]
}