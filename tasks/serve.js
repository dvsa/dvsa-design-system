const path = require('path')

const browsersync = require('metalsmith-browser-sync') // setup synchronised browser testing
const metalsmith = require('../lib/metalsmith') // configured static site generator

const paths = require('../lib/paths.js') // specify paths to main working directories

// setup synchronised browser testing
metalsmith.use(browsersync({
  ghostMode: false, // Ghost mode tries to check the same input across examples.
  open: false, // When making changes to the server, we don't want multiple windows opening.
  server: paths.public, // server directory
  files: [
    path.join(paths.source, '**/*'),
    path.join(paths.views, '**/*'),
    path.normalize('node_modules/govuk-frontend/**/*')
  ] // files to watch
}))

// build to destination directory
metalsmith.build(function (err, files) {
  if (err) {
    throw err 
  }
})
