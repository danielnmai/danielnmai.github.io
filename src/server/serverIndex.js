import express from "express"
import webpack from "webpack"
import webpackDevMiddleware from 'webpack-dev-middleware'
import cors from "cors"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from '../App.js'
import ContextProvider from '../ContextProvider.js'
import template from './template'
import createIndexPage from './createIndexPage'

const app = express()
const config = require('../../webpack.config.js')
const compiler = webpack(config)

app.use(cors())

app.use(webpackDevMiddleware(compiler, {
    publicPath: config[0].output.publicPath
}))

//Serve the app with the public bundle.js
// app.use(express.static("online/dist/"))

app.get("/", (req, res, next) => {
  const css = new Set()
  const context = { insertCss: (...styles) => 
    styles.forEach(style => css.add(style._getCss()))}

  let markup = renderToString(
    <ContextProvider context={context}> 
      <App />
    </ContextProvider>
  )
  let output = template(css, markup) + "\n"
  
  // createIndexPage(output)
  res.send(output)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000\n`)
})