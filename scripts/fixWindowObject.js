let path = require('path');
let prepend = require('prepend-file');
let findUp = require('find-up')

let FIXED_FILE = ['typeit', 'dist', 'typeit.js'];
let FIXED_CODE = '// < HACK >\n'
  +'if (!process.env.BROWSER) {\n'
  +'  global.window = {};\n'
  +'}\n// </ HACK >\n\n';

function hackWindowObject() {
  findUp('node_modules')
    .then(nodeModules => prepend(
      path.resolve.apply(path, [nodeModules].concat(FIXED_FILE)),
      FIXED_CODE,
      console.log('Success.')
    ));
}

hackWindowObject();