var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
 return gulp.src('app/scss/**/*.scss') // Получаем все файлы, оканчивающиеся на .scss, из app/scss и дочерних папок
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('browserSync', function() {
 browserSync.init({
  server: {
   baseDir: 'app'
  },
 })
})

gulp.task('watch', gulp.parallel('browserSync', function(){
 gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
 // Перезагрузка браузера при изменении файлов HTML или JS
 gulp.watch("app/*.html").on('change', browserSync.reload);

}))
