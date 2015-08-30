var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

var scripts = {
  'src': 'src/**/*.js',
  'dist': 'dist/**/*.js'
}

gulp.task('babel', function () {
  return gulp.src(scripts.src)
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel']);
