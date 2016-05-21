/**
 * Created by maurice on 5/19/2016.
 */


var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function(){

    return gulp.src('./src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('hello-world', function   (){
    console.log('hello-world');
});

gulp.task('relint', function(){
    gulp.watch('./src/**/*.js', ['lint'])
});

gulp.task('default', ['hello-world', 'lint', 'relint']);