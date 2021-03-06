/**
 * Created by yzsoft on 16/6/2.
 */
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    less=require('gulp-less'),
    cssMin=require('gulp-minify-css'),
    sourceMaps=require('gulp-sourcemaps'),
    notify=require('gulp-notify'),
    plumber=require('gulp-plumber'),
    liveReload=require('gulp-livereload');
gulp.task('jsmin',function(){
   gulp.src('src/js/index.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});

gulp.task('testLess',function(){
    gulp.src(['src/less/*.less'])
        .pipe(sourceMaps.init())
        .pipe(less())
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourceMaps.write())
        .pipe(cssMin({compatibility:'ie7'}))//兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(liveReload())
});
gulp.task('testWatch',function(){
    gulp.watch(['src/**/*.less','src/**/*.js'],['testLess','jsmin']);
});
gulp.task('watch',function(){
    liveReload.listen();
    gulp.watch('src/**/*.less',['testLess'])

});
gulp.task('default',['testLess','jsmin']);