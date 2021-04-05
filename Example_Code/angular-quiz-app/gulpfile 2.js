/*
|--------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------
|
| Below you can add all files and plugins you need within
| your tasks.
|
*/
var gulp = require('gulp');
var gulpif = require('gulp-if');
var tslint = require('gulp-tslint');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var preprocess = require('gulp-preprocess');
var rename = require('gulp-rename');
var pp = require('preprocess');
var argv = require('yargs').argv;
var del = require('del');
var exec = require('node-exec-promise').exec;
var log = require('fancy-log');
var colors = require('ansi-colors');
var notifier = require('node-notifier');
var path = require('path');

/*
|--------------------------------------------------------------------------
| Global Definitions
|--------------------------------------------------------------------------
|
| All configurations can be defined in config.js. The environment
| will be set automatically and can be changed by using either
| "gulp build" or "gulp dev-build".
|
| Also all other global definitions go here, like defining the
| typescript project.
|
*/
var config = require('./config');
config.env = process.env.NODE_ENV;
config.mode = config.env !== 'production' ? 'bundle' : 'build';
config.build = true;

// Determine environment before it is set for initialization
process.env.NODE_ENV = config.env =
  argv._[0] === 'build' ? 'production' : 'development';

/*
|--------------------------------------------------------------------------
| Internal Tasks
|--------------------------------------------------------------------------
|
| Tasks are defined below, that are used internally:
|
| - clean:*
|     Deletes the specific files, based on the clean task.
|
| - builder/jspm
|     Builds and bundles the application via SystemJS.
|
| - less
|     Compiles less files and saves it into the distribution
|     folder.
|
| - copy:*
|     Copies files according to the task name.
|
| - bundle:*
|     Bundles files according to the task name.
|
| - lint:*
|     Lints specific types of files.
|
*/

gulp.task('clean:all', function() {
  return del([path.normalize(path.join(config.dist, '**/*'))]);
});

gulp.task('clean:scripts', function() {
  return del([
    path.normalize(path.join(config.dist, 'js/**/*.js')),
    path.normalize(path.join(config.dist, 'js/**/*.map'))
  ]);
});

gulp.task('clean:vendor', function() {
  return del([path.normalize(path.join(config.vendor.dest, '**/*'))]);
});

gulp.task('clean:styles', function() {
  return del([
    path.normalize(path.join(config.dist, 'css/**/*.css')),
    path.normalize(path.join(config.dist, 'css/**/*.map'))
  ]);
});

gulp.task('clean:index', function() {
  return del([path.normalize(path.join(config.dist, 'index.html'))]);
});

gulp.task('clean:html', function() {
  return del([path.normalize(path.join(config.dist, '**/*.html'))]);
});

gulp.task('clean:assets', function() {
  return del([path.normalize(path.join(config.dist, 'assets/**/*'))]);
});

gulp.task('jspm', function(done) {
  var bundles = [];

  config.jspm.bundles.forEach(function(bundle) {
    var command =
      config.env !== 'production' ? bundle.devOptions : bundle.options;
    command = command.slice(0);
    command.unshift('node_modules/.bin/jspm');

    bundles.push(exec(command.join(' ')));
  });

  Promise.all(bundles).then(
    function(values) {
      var file = path.join(config.dist, 'js/app.js');
      var context = { config: config };
      var options = { type: 'js' };

      pp.preprocessFile(file, file, context, done, options);
    },
    function(error) {
      onError('Error bundling with jspm.', error);
    }
  );
});

gulp.task('less', function() {
  return gulp
    .src(config.less.src)
    .pipe(
      gulpif(
        config.env !== 'production',
        sourcemaps.init().on('error', onError)
      )
    )
    .pipe(less().on('error', onError))
    .pipe(cleanCSS().on('error', onError))
    .pipe(rename(config.less.name).on('error', onError))
    .pipe(
      gulpif(
        config.env !== 'production',
        sourcemaps.write('./').on('error', onError)
      )
    )
    .pipe(gulp.dest(config.less.dest))
    .on('error', onError);
});

gulp.task('copy:index', function() {
  return gulp
    .src(config.index.src)
    .pipe(
      preprocess({
        context: {
          config: config
        }
      }).on('error', onError)
    )
    .pipe(rename(config.index.name).on('error', onError))
    .pipe(gulp.dest(config.index.dest))
    .on('error', onError);
});

gulp.task('copy:assets', function() {
  return gulp
    .src(config.assets.src)
    .pipe(gulp.dest(config.assets.dest))
    .on('error', onError);
});

var copyTasks = [];

function createCopyTask(element, index) {
  var name = 'copy:originals:' + index;
  var sources = [];

  element.src.forEach(function(p) {
    sources.push(path.join(element.base, p));
  });

  gulp.task(name, function() {
    return gulp
      .src(sources)
      .pipe(gulp.dest(element.dest), { base: element.base })
      .on('error', onError);
  });

  copyTasks.push(name);
}

clone(config.copy).forEach(function(element, index) {
  createCopyTask(element, index);
});

gulp.task('copy:originals', gulp.series(...clone(copyTasks)));

gulp.task('lint:ts', function() {
  return gulp
    .src([config.tslint.src])
    .pipe(
      tslint({
        formatter: 'stylish'
      })
    )
    .pipe(tslint.report())
    .on('error', notifyError);
});

/*
|--------------------------------------------------------------------------
| Helper Tasks
|--------------------------------------------------------------------------
|
| The following tasks are used as helpers.
|
*/
gulp.task('set-dev', function() {
  return Promise.resolve(process.env.NODE_ENV = config.env = 'development');
});
gulp.task('set-prod', function(done) {
  return Promise.resolve(process.env.NODE_ENV = config.env = 'production');
});

gulp.task('start', function(done) {
  log(colors.green('Starting ' + config.env + ' build...'));

  return done();
});

gulp.task('finish', function(done) {
  log(colors.green('Build has finished.'));

  notifier.notify({
    title: 'Build Successful',
    message: 'All build tasks have finished and your app is ready.'
  });

  return done();
});

/*
|--------------------------------------------------------------------------
| Helper Functions
|--------------------------------------------------------------------------
|
| Simple functions for different purposes.
|
*/

function onError(error, details) {
  log(colors.red('Error: ' + error));
  if (details) {
    log(details);
  }
  notifyError(error);
}

function notifyError(error) {
  notifier.notify({
    title: 'Error',
    message: 'There was an error building your app.'
  });
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/*
|--------------------------------------------------------------------------
| Task Collections
|--------------------------------------------------------------------------
|
| The tasks below bundle common sequences:
|
| - tasks
|     The main task sequence.
|
| - copy
|     Should bundle all tasks prefixed with "copy:".
|
| - clean:default
|     Only clear scripts (excluding vendor), styles and the index.
|
| - bundle
|     Execute all available bundle tasks.
|
| - lint
|     Run all available lint tasks.
|
| - typescript
|     Runs all required typescript tasks.
|
*/

gulp.task('copy', gulp.series('copy:index', 'copy:assets', 'copy:originals'));

gulp.task('tasks', gulp.series('copy', 'less'));

gulp.task('clean:default', gulp.series('clean:scripts', 'clean:styles', 'clean:index'));

gulp.task('lint', gulp.series('lint:ts'));

gulp.task('master', gulp.series('lint', 'clean:all', gulp.parallel('tasks', 'jspm')));

/*
|--------------------------------------------------------------------------
| Main Tasks
|--------------------------------------------------------------------------
|
| These tasks are intended to be called via the console:
|
| - build
|     Performs a production build.
|
| - dev-build
|     Performs a development build.
|     A dev build performs the same tasks as
|     a prod build, but with the env set to
|     dev, which may result in different
|     behaviors in tasks.
|
| - watch-build
|     Tasks that should run if a file changes.
|
| - watch
|     Performs a development build everytime
|     something has changes.
|
| - serve
|     Brings up a server, to test the app
|     locally.
|
*/

gulp.task('build', gulp.series('set-prod', 'start', 'master', 'finish'));

gulp.task('dev-build', gulp.series('set-dev', 'start', 'master', 'finish'));

gulp.task('watch-build', gulp.series('set-dev', 'start', 'lint', 'clean:default', gulp.parallel('tasks'), 'finish'));

gulp.task('watch', function() {
  gulpSequence('watch-build')(function() {
    gulp.watch(config.watch, ['watch-build']);
  });
});

gulp.task('serve', function(done) {
  log(colors.blue('Use "npm start [dev]" instead.'));
  done();
});

gulp.task('default', gulp.series('build'));
