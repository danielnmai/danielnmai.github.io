const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
//Browser Config
var browserConfig = {
  entry: './src/clientIndex.js', // entry point
  output: {
    path: path.join(__dirname, "online/dist"), // place where bundled app will be served
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  //Using webpack middleware with express server (for SSR),
  //so no longer need webpack-dev-server
  // devServer: {
  //   contentBase: './src',
  //   inline: true, // autorefresh
  //   port: 3000 // development port server
  // },
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
        use: ['isomorphic-style-loader','style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader','style-loader','css-loader', 'sass-loader']
      },
      {
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
  entry: './src/server/serverIndex.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'ssr'),
    filename: 'server.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules:[
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
        use: [
          'isomorphic-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              emitFile: false
            }
          }
        ]
      }, {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            emitFile: false
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]

}
module.exports = [browserConfig, serverConfig];
