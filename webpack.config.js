const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'build'),
    filename: 'bundle.js'
  }
}