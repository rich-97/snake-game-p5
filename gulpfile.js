const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['scss']);

gulp.task('watch', function () {
    gulp.watch([
        './scss/*.scss',
    ], ['default']);
});
