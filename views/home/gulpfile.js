var gulp = require('gulp'),
	path = require('path'),
	less = require('gulp-less'),
	react = require('react'),
	cssMin = require('');    //todo

gulp.task('less', function() {
	return gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(cssMin())
		.pipe(gulp.dest('./dist/css'));
});



gulp.task('watch', function() {
	gulp.watch('', ['less']);
});

gulp.task('build', ['less', 'react', 'watch']);

gulp.task('default', ['build'], function() {
	//
});