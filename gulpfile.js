'use strict';

// Load in all the Gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Adding Gulp Task for SASS
gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
        .pipe(sass().toString('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// Adding Gulp Task for watching files related to 'sass' task
gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['sass']);
});

// Adding Gulp Task for browser sync
gulp.task('browser-sync', function () {
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        './img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

// I had to change this because of version issue
gulp.task('default', gulp.series('browser-sync', function () {
    gulp.start('sass:watch');
}));