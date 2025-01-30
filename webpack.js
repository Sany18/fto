const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: 'bundle.js',
    path: dist
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',

    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/sw.js', to: dist },
      ],
    }),
  ],
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  mode: 'development',
  stats: 'errors-only',
  devtool: 'inline-source-map',
};
