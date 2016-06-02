/**
 * Created by yzsoft on 16/6/2.
 */
var gulp=require('gulp'),
    uglify=require('gulp-uglify');
gulp.task('jsmin',function(){
   gulp.src('src/js/index.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});