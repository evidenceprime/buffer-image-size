var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './lib/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'buffer-image-size.js',
    library: {
      name: 'BufferImageSize',
      type: 'umd',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: 'lib/index.d.ts',
        to: 'buffer-image-size.d.ts',
      }],
    }),
  ],
  target: 'web',
};
