/**
 * Created by yzsoft on 16/6/2.
 */
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    less=require('gulp-less');
gulp.task('jsmin',function(){
   gulp.src('src/js/index.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});

gulp.task('testLess',function(){
    gulp.src(['src/less/style.less','src/less/page.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});