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
      {
        test: /\.s[ac]ss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
    hot: true,
    port: 9000,
    watchFiles: ['src'],
    devMiddleware: {
      writeToDisk: true,
    },
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  mode: 'development',
  stats: 'errors-only',
  devtool: 'inline-source-map',
};
