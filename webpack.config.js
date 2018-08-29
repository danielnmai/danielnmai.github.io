const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
//Browser Config
var browserConfig = {
  entry: './src/index.js', // entry point
  output: {
    path: path.join(__dirname, "online/dist"), // place where bundled app will be served
    filename: 'bundle.js', 
  },
  devServer: {
    contentBase: './src',
    inline: true, // autorefresh
    port: 3000 // development port server
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // search for js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }, {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}
//Server Config
var serverConfig =  {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules:[
      { test: /\.jsx?$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]

}
module.exports = [browserConfig, serverConfig];
