/**
 * Created by yzsoft on 16/6/2.
 */
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    less=require('gulp-less'),
    cssMin=require('gulp-minify-css'),
    sourceMaps=require('gulp-sourcemaps');
gulp.task('jsmin',function(){
   gulp.src('src/js/index.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});

gulp.task('testLess',function(){
    gulp.src(['src/less/*.less'])
        .pipe(sourceMaps.init())
        .pipe(less())
        .pipe(sourceMaps.write())
        .pipe(cssMin({compatibility:'ie7'}))//兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default',['testLess','jsmin']);