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
    index__home: path.resolve(__dirname, 'src/app/views/pages/home', 'index.ts'),
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
      chunks: ['index__home'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './style/main.css',
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
        from: "*.svg",
        to: "images/nav_icon",
        context: path.resolve(__dirname, 'src', 'asset', 'images', 'nav_icon')
      }
      ],
    })
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
