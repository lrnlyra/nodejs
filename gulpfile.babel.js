var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require("gulp-sass");

gulp.task("es5", function () {
	return console.log('I\'m a task written in ES5');
});
gulp.task('es6', () => console.log('I\'m a task written in ES6'));
gulp.task('sass', () => gulp.src('public/scss/*.scss').pipe(sass()).pipe(gulp.dest('public/css')));
