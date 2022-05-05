const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.mode,
    entry: './client/src/index.js',
    output: {
      path: path.resolve(__dirname, 'client', 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.jsx?/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './client/src/index.html'
    })],
    devServer: {
      static: './client/build',
      port: 8888
    }
  }
}