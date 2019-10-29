const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

// variables
const isProduction =
  process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, '../src');
const outPath = path.join(__dirname, '../../src/main/resources/build');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

function build({ devOptions = {} }, env) {
  const config = {
    devtool: 'eval',
    mode: 'development',
    context: sourcePath,
    entry: [
      './index'
    ],
    output: {
      path: path.resolve(__dirname, outPath),
      filename: isProduction ? 'js/[contenthash].js' : 'js/[hash].js',
      chunkFilename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].[hash].js',
      publicPath: '/'
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: false
      }),
      new WebpackCleanupPlugin(),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/[contenthash].css' : 'css/[hash].css',
        disable: !isProduction
      }),
      new HtmlWebpackPlugin({
        template: 'app/assets/index.html'
      }),
      // new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          include: path.resolve(__dirname, sourcePath)
        },
        // css
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                ],
              },
            },
          ]
        },
      ]
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
      historyApiFallback: {
        disableDotRule: true,
      },
    }
  };
  return webpackMerge(devOptions, config)
}

module.exports = build;
