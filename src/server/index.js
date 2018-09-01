const express = require("express")
const webpack = require("webpack")
const path = require("path")

const cors = require("cors")
const { renderToString } = require("react-dom/server")
const React = require('react')

const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('../../webpack.config.js')
const compiler = webpack(config)




// We're going to serve up the public
// folder since that's where ourm
// client bundle.js file will end up.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config[0].output.publicPath
}))

app.use(express.static("online/dist/"))

app.get("/", (req, res, next) => {

  res.send(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src='/bundle.js' defer></script>
      </head>

      <body>
        <div id="app"></div>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000\n`)
})