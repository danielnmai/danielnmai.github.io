import express from "express"
import webpack from "webpack"
import webpackDevMiddleware from 'webpack-dev-middleware'
import cors from "cors"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from '../App.js'
import ContextProvider from '../ContextProvider.js'

const app = express()
const config = require('../../webpack.config.js')
const compiler = webpack(config)

app.use(cors())

app.use(webpackDevMiddleware(compiler, {
    publicPath: config[0].output.publicPath
}))

//Serve the app with the public bundle.js
app.use(express.static("online/dist/"))

app.get("/", (req, res, next) => {
  const css = new Set()
  const context = { insertCss: (...styles) => 
    styles.forEach(style => css.add(style._getCss()))}

  const markup = renderToString(
    <ContextProvider context={context}> 
      <App />
    </ContextProvider>
  )

  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Personal Website">
    <meta name="author" content="Daniel Mai">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Mai</title>
    <style type="text/css">${[...css].join('')}</style>
</head>
<body>
    <!-- Root Element -->
    <div id="app">${markup}</div>
    <script src="bundle.js"></script>              
</body>
</html>
    `
  )
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000\n`)
})