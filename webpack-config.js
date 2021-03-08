const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { escapeRegExp } = require('lodash');
const pkg = require('./package.json');

const externals = Object.keys(pkg.dependencies);
const ENABLE_BUNDLE_ANALYZER = process.env.ANALYZE;

module.exports = {
  entry: {
    index: './src/index.js',
    helpers: './src/helpers.js',
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'motif-core'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.jsx?$).*\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[folder]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },

  // Do not bundle third party libraries used in motif, they are bundled in website application instead.
  // Those libraries are motif peer dependencies but defined as `dependencies`. Because neither npm nor yarn installs
  // libraries in `peerDependencies` while running `npm/yarn install`. They need to be installed while development but
  // not bundled when publishing motif.
  // eslint-disable-next-line
  externals: new RegExp(`^(${externals.map(name => escapeRegExp(name)).join('|')})\\b`, 'i'),

  plugins: [
    // Webpack bundle analyzer represents webpack bundle content that helps optimization
    new BundleAnalyzerPlugin({
      analyzerMode: ENABLE_BUNDLE_ANALYZER ? 'server' : 'disabled',
    }),
  ],
};
