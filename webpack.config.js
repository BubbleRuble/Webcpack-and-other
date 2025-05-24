const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /.css$/, 
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
    ],
  },
  devServer: {
    client: {
      logging: 'error',
    },
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3336,
    open: true,
  },
  stats: {
    all: false,
    errors: true,
    hash: true,
  },
};
