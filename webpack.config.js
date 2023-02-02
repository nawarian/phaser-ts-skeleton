const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

const htmlPluginCfg = new htmlPlugin({
  template: path.resolve(__dirname, 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/game.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
      },
      {
        test: require.resolve('phaser'),
        loader: 'expose-loader',
        options: {
          exposes: {
            globalName: 'Phaser',
            override: true,
          },
        },
      },
    ],
  },
  plugins: [htmlPluginCfg],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8080,
    open: false,
    hot: true,
    watchFiles: ['src/**/*.ts', 'index.html'],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
