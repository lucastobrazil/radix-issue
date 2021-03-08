const path = require('path');
const webpack = require('webpack');

// this file is in .storybook/webpack-config.js

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              localIdentName: '[folder]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(svg|eot|ttf|woff2?|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.yml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
    ],
  }
};
