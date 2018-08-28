import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import App from '../App'
import React from 'react'

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("online/dist"))

app.get("*", (req, res, next) => {
  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(4000, () => {
  console.log(`Server is listening on port: 4000`)
})