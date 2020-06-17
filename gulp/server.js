const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', (done) => {
  nodemon({
    watch: ['.env', '**/*.js', '**/*.json'],
    script: 'server.js',
    ext: 'js',
  }).on('quit', () => {
    process.exit(0)
  });
  done();
});
