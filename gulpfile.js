var gulp = require('gulp');
var jsonminify = require('gulp-jsonminify');

gulp.task('default', function() {
  return gulp.src('./trails/src/*.geojson')
    .pipe(jsonminify())
    .pipe(gulp.dest('./trails/dist'));
});
