var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-webserver');
var rev = require('gulp-rev');
var collector = require('gulp-rev-collector');

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
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('devjs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js/minjs'))
})

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devscss'))
    gulp.watch('./src/js/*.js', gulp.series('devjs'))
})

// gulp.task('dev', gulp.series('devscss', 'devjs', 'devserver', 'watch'))