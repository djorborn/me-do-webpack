# Seeting Up Webpack

## Awesome plugins and loaders
1. html-webpack-plugin
2. clean-webpack-plugin
3. style-loader/css-loader
4. file-loader
5. xml-loader

## Example webpack.config.js
   ```javascript
      const path = require('path')
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      const CleanWebpackPlugin = require('clean-webpack-plugin')

      module.exports = {
        entry: {
          app: './src/index.js',
          thing: './src/thing.js'
        },
        output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
          },
        plugins: [
          new HtmlWebpackPlugin({
            title: 'Example Page Title'
            }),
          new CleanWebpackPlugin(['dist'])
        ],
        module: {
          rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          }
          ]
        }
      }
