const webpackConfig = {
  entry: './src/Main.ts',
  output: {
    path: `${__dirname}/dist/js/`,
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.ts']
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: [`${__dirname}/dist`, `${__dirname}/dist/shader`, `${__dirname}/dist/css`],
    open: 'Safari',
    host: '0.0.0.0',
    port: 3001,
    disableHostCheck: true,
    watchContentBase: true
  }
};
module.exports = webpackConfig;
