const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name].${ext}` : `[name][contenthash].${ext}`);
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/app/views/pages/home', 'index.ts'),
    about: path.resolve(__dirname, 'src/app/views/pages/about', 'index.ts'),
    lookbook: path.resolve(__dirname, 'src/app/views/pages/lookbook', 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: `script/${filename('js')}`,
    assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/views/pages/home/', 'index.pug'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.html',
      chunks: ['home'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/views/pages/about/', 'about.pug'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'about.html',
      chunks: ['about'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/views/pages/lookbook/', 'lookbook.pug'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'lookbook.html',
      chunks: ['lookbook'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? './style/[name].[contenthash].css' : './style/[name].css',
    }),
    new CopyPlugin({
      patterns: [{
        from: "*.png",
        to: "images/social_icon",
        context: path.resolve(__dirname, 'src', 'asset', 'images', 'social_icon')
      }
      ],
    }),
    new CopyPlugin({
      patterns: [{
        from: "*.jpg",
        to: "images/about",
        context: path.resolve(__dirname, 'src', 'asset', 'images', 'about')
      }
      ],
    }),
    new CopyPlugin({
      patterns: [{
        from: "*.jpg",
        to: "images/lookbook",
        context: path.resolve(__dirname, 'src', 'asset', 'images', 'lookbook')
      }
      ],
    }),
  ],
  devtool: isProd ? false : 'source-map',
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name].[ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
