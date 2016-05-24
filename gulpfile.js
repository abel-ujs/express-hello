var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var paths = {
	js:'app/**/*'
}
gulp.task('browserify', function () {
	var b = browserify('app/component.js')
			.transform(reactify)
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./build/'));
	return b;
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['browserify']);
});

gulp.task('default',['browserify','watch'])

