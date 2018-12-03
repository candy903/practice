var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-webserver');

//起服务
// gulp.task('devserver', function() {
//     return gulp.src('src')
//         .pipe(server({
//             port: 8080,
//             livereload: true
//         }))
// })

//压缩css
gulp.task('devscss', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
})

// gulp.task('devjs', function() {
//     return gulp.src('./src/js/index.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./src/js/minjs'))
// })

// gulp.task('watch', function() {
//     return gulp.watch('./src/scss/index.scss', gulp.series('devscss'))
//     gulp.watch('./src/js/index.js', gulp.series('devjs'))
// })

// gulp.task('dev', gulp.series('devscss', 'devjs', 'devserver', 'watch'))