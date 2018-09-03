import express from "express"
import webpack from "webpack"
import path from "path"

import webpackDevMiddleware from 'webpack-dev-middleware'
import cors from "cors"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from '../App.js'

const app = express()
const config = require('../../webpack.config.js')
const compiler = webpack(config)

if(!__isBrowser__){
  global.window = {}
}

app.use(cors())

app.use(webpackDevMiddleware(compiler, {
    publicPath: config[0].output.publicPath
}))

//Serve the app with the public bundle.js
app.use(express.static("online/dist/"))

app.get("/", (req, res, next) => {
  // const markup = renderToString(
  //   <App />
  // )

  res.sendFile(path.resolve('./src/index.html'))
})

app.listen(3000, () => {
  console.log('is browser? ' + __isBrowser__)
  console.log('window is not defined ' + global.window)
  console.log(`Server is listening on port: 3000\n`)
})