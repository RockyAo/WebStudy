/**
 * Created by RockyAo on 2016/11/20.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

//定义lint任务,验证代码,注意gulp采取了pipe方式,用流方式直接向下传递
gulp.task('lint',function () {

    return gulp.src(src/test.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//定义compress任务 压缩代码
gulp.task('compress',function () {

    return gulp.src('src/test.js')
        .pipe(uglify())
        .pipe(gulp.dest('buld'));
});

//将lint和compress组合起来,创建一个默认任务
gulp.task('default',['lint','compress']);

