/*var gulp = require('gulp');*/

/*import gulp from 'gulp';*/



var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('es6', () => console.log('I\'m a task written in ES6'));
gulp.task("es5", function () {
  return console.log('I\'m a task written in ES5');
});
