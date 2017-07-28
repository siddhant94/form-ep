var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: '' });
    gulp.watch('*.html');
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'form.html', cache: false })
  ).listen(8080, done);
});
