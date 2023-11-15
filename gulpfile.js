const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourceMaps.write('.maps'))
    .pipe(gulp.dest('./build/styles'))
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}


exports.default = ()=>{
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} ,gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false} ,gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} ,gulp.series(comprimeJs));
}