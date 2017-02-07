const webpack = require('webpack');
const path = require('path');
const libraryName = require('./package.json').name;

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const outputFile = `${libraryName}.min.js`;

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    axios: 'axios',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};

module.exports = config;
