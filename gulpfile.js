const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
    styles: {
        css: 'css',
        all: 'scss/*.scss',
        scss: 'scss/main.scss'
    }
};

gulp.task('scss', function () {
    gulp.src(paths.styles.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.css));
});

gulp.task('default', ['scss']);

gulp.task('watch', function () {
    gulp.watch([
        paths.styles.all
    ], ['default']);
});

