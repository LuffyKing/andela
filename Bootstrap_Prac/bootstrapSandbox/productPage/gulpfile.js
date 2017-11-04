const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
//compile SASS
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});
//Move js files to SRC
gulp.task('js',function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
  'node_modules/jquery/jquery.min.js',
  'node_modules/popper.js/dist/umd/popper.min.js'])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});
//WATCH Sass & serve
gulp.task('serve',['sass'],function(){
  browserSync.init({
    server: "./src"
  });
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'], ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});
// move font Awesome fonts folder to src
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("src/fonts"));
});
// move font awesome css files
gulp.task('fa', function(){
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("src/css"));
});
gulp.task('default', ['js','serve','fa','fonts']);
