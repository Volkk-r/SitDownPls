const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const image = require('gulp-image');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemap = require('gulp-sourcemaps');
const del = require('del');
const gulpif = require('gulp-if');

let prod = false;
const isProd = (done) => {
  prod = true;
  done();
};

const clean = () => {
  return del(['dist'])
}

const resource = () => {
  return src('src/fonts/**')
    .pipe(dest('dist/fonts'))
}
const assets = () => {
  return src('src/assets/**')
    .pipe(dest('dist/assets'))
}
const styles = () => {
  return src('src/css/**/*.css')
    .pipe(gulpif(!prod, sourcemap.init()))
    .pipe(concat('style.css'))
    .pipe(gulpif(prod, autoprefixer({
      cascade: false,
    })))
    .pipe(gulpif(prod, cleanCss({
      level: 2
    })))
    .pipe(gulpif(!prod, sourcemap.write()))
    .pipe(dest('dist/css'))
    .pipe(gulpif(!prod, browserSync.stream()))
}

const images = () => {
  return src([
    'src/img/*.svg',
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/**/*.jpeg'
  ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const favicon = () => {
  return src('src/img/favicon_io/**')
    .pipe(dest('dist/img/favicon_io'))
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(gulpif(prod, htmlMin({
      collapseWhitespace: true
    })))
    .pipe(dest('dist'))
    .pipe(gulpif(!prod, browserSync.stream()))
}

const scripts = () => {
  return src('src/js/**/*.js')
    .pipe(gulpif(!prod, sourcemap.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('index.js'))
    .pipe(gulpif(prod, uglify({
      toplevel: true
    }).on('error', notify.onError())))
    .pipe(gulpif(!prod, sourcemap.write()))
    .pipe(dest('dist/js'))
    .pipe(gulpif(!prod, browserSync.stream()))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/css/**/*.css', styles)
watch('src/js/**/*.js', scripts)
watch('src/resource/**', resource)
watch('src/assets/**', assets)

exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify

exports.dev = series(clean, resource, assets, htmlMinify, scripts, styles, images, favicon, watchFiles)
exports.build = series(isProd, clean, resource, assets, htmlMinify, scripts, styles, favicon, images)
exports.default = series(clean, resource, assets, htmlMinify, scripts, styles, images, favicon, watchFiles)
