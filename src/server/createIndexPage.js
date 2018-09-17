const fs = require('fs')
const path = require('path')
const baseDir = process.env.PWD


//Copy the content generated from the Express server to the public index.html page

export default (content) => {
    let dest = path.join(baseDir, 'src/index.html')
    fs.writeFile(dest, content, (err) => {
        if(err) throw err
        console.log('Successfully updated public-facing index page.')
    })

}