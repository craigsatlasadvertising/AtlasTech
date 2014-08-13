var gulp = require('gulp');
	sass = require('gulp-ruby-sass');
	
/*gulp.task('default', function(){
	console.log('hello world')	;
});*/


//style Task
//style SCSS
/*gulp.task('stylesprod', function(){
	gulp.src('../client/demo/scss/*.scss')
	.pipe(sass({
		
	}))
	.pipe(gulp.dest('../client/demo/css'));
});*/

gulp.task('styles', function(){
	gulp.src('../client/**/*.scss')
	.pipe(sass(/*{style: 'compressed'}*/))
	.pipe(gulp.dest('../client'));
});

// Watch Task
gulp.task('watch', function(){
	gulp.watch('../client/**/*.scss', ['styles']);
});

gulp.task('default', ['watch', 'styles']);