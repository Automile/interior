/* global require */

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var cp = require('child_process');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var minifyHTML = require('gulp-minify-html');
var runSequence = require('run-sequence');
var p = require('./package.json');
var shell = require('gulp-shell');


/**
 * JS
 */

gulp.task('custom-plugins', shell.task([
  'npm run build'
]));

gulp.task('js', ['custom-plugins'], function () {
  return gulp.src([
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/moment/moment.js',
      'node_modules/moment/locale/de.js',
      'node_modules/moment/locale/nb.js',
      'node_modules/moment/locale/sv.js',
      'node_modules/datatables/media/js/jquery.dataTables.js',
      'node_modules/datatables-select/js/dataTables.select.js',
      'node_modules/tether/dist/js/tether.js',
      'node_modules/tether-drop/dist/js/drop.js',
      'node_modules/tether-tooltip/dist/js/tooltip.js',
      'node_modules/vex-js/dist/js/vex.js',
      'node_modules/vex-dialog/dist/vex.dialog.js',
      '_src/custom-plugins/build/vendor.js',
      '_src/custom-plugins/build/datePicker.js',
      '_src/custom-plugins/build/select.js'
    ])
    .pipe(concat('interior.js'))
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('docs/js'))
    .pipe(gulp.dest('release-' + p.version))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('docs/js'))
    .pipe(gulp.dest('release-' + p.version))
    .pipe(notify({
      message: 'JS vendor task complete'
    }));
});





/**
 * JS Docs
 */

gulp.task('js-docs', function () {
  return gulp.src([
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js'
    ])
    .pipe(concat('interior-docs.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('docs/js'))
    .pipe(notify({
      message: 'JS docs task complete'
    }));
});





/**
 * CSS
 */

gulp.task('css', ['css-docs'], function () {
  return gulp.src('_src/scss/interior.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    // save expanded css file
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('release-' + p.version))
    .pipe(gulp.dest('docs/css'))
    // save minified css file
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('release-' + p.version))
    .pipe(gulp.dest('docs/css'))
    // reload browser-sync
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify({
      message: 'CSS task complete'
    }));
});





/**
 * CSS DOCS
 */

gulp.task('css-docs', function () {
  return gulp.src('_src/scss/interior-docs.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('docs/css'))
    // reload browser-sync
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify({
      message: 'CSS Docs task complete'
    }));
});





/**
 * Icons
 */

gulp.task('svg', function () {
  return gulp
    .src('_src/icons/*.svg')
    .pipe(rename({
      prefix: 'shape-'
    }))
    .pipe(svgmin({
      plugins: [{
        removeTitle: true
      }, {
        removeAttrs: true
      }, {
        removeStyleElement: true
      }, {
        removeDimensions: true
      }]
    }))
    .pipe(svgstore())
    .pipe(rename('icons.html'))
    .pipe(gulp.dest('_includes'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify({
      message: 'SVG task complete'
    }));
});





/**
 * Clean
 */

gulp.task('clean', function () {
  return gulp.src(['docs', 'css', 'js', '_src/custom-plugins/build', 'release-**'], {
      read: false
    })
    .pipe(clean());
});





/**
 * Build the Jekyll Site
 */

gulp.task('jekyll-build', function (done) {
  browserSync.notify('Building Jekyll');
  return cp.spawn('jekyll', ['build'], {
      stdio: 'inherit'
    })
    .on('close', done);
});





/**
 * Rebuild Jekyll & do page reload
 */

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});





/**
 * Wait for jekyll-build, then launch the Server
 */

gulp.task('browser-sync', ['jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    },
    host: 'localhost'
  });
});





/**
 * Minify output
 */

gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('docs/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('_site'));
});





/**
 * Copy the svg sprite file to docs site
 */

gulp.task('copy-icons', function () {
  return gulp.src('_includes/icons.html')
    .pipe(gulp.dest('_site'));
});





/**
 * Keep track of file changes
 */

gulp.task('watch', function () {
  gulp.watch('_src/scss/**/*.scss', ['css']);
  gulp.watch('_src/custom-plugins/**/*.scss', ['css']);
  gulp.watch('_src/custom-plugins/automile-datepicker-plugin/src', ['js']);
  gulp.watch('_src/custom-plugins/automile-select-plugin/src', ['js']);
  gulp.watch('_src/icons/*.svg', ['svg']);
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', '_pages/*', '_components/*', '_css/*', '_javascript/*', '_patterns/*'], ['jekyll-rebuild']);
});





/**
 * Tasks
 */

gulp.task('start', ['clean'], function () {
  gulp.start('jekyll-rebuild', 'svg', 'css', 'js', 'js-docs', 'browser-sync', 'watch');
});

gulp.task('build', function () {
  runSequence('clean', ['jekyll-rebuild'], ['svg', 'css', 'js', 'js-docs'], ['html'], 'copy-icons');
});
