const express = require("express")
const webpack = require("webpack")
const path = require("path")

const cors = require("cors")
const { renderToString } = require("react-dom/server")
const React = require('react')

const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)




// We're going to serve up the public
// folder since that's where ourm
// client bundle.js file will end up.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.use(express.static("online/dist/"))

app.get("/", (req, res, next) => {

  res.sendFile(path.resolve(__dirname, "./src/index.html"))
})

app.listen(4000, () => {
  console.log(`Server is listening on port: 4000`)
})