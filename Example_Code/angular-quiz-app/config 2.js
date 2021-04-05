var assign = require('lodash.assign');

/*
|--------------------------------------------------------------------------
| BUILD CONFIGURATION
|--------------------------------------------------------------------------
|
| All configurations concerning the build go here.
|
| Note that you can always use an array for src, to be more
| specific or to exclude files.
|
| TypeScript Lint Configuration:
|   - tslint.json
|
| TypeScript Configutation:
|   - tsconfig.json
|
| Reserved:
| - config.env
| - config.mode
| - config.build
|
*/
var config = config || {};

// Use the build timestamp to prevent browser caching of new versions
config.buildTimestamp = new Date().valueOf();

/*
|--------------------------------------------------------------------------
| App Base Href
|--------------------------------------------------------------------------
|
| Set the <base> href attribute and the base for
| the application itself (e.g. routing)
|
*/
config.htmlBaseHref = '/';
config.appBaseHref = '/';

/*
|--------------------------------------------------------------------------
| Source and Distribution Location
|--------------------------------------------------------------------------
|
| Define the location of the source and distribution folder.
|
*/
config.src = './src';
config.dist = './dist';

/*
|--------------------------------------------------------------------------
| Watch Files
|--------------------------------------------------------------------------
|
| Define files, which "gulp watch" should keep an eye on.
|
*/
config.watch = ['src/**/*', 'index.html'];

/*
|--------------------------------------------------------------------------
| SystemJS Builder
|--------------------------------------------------------------------------
|
| You can pass SystemJS builder/JSPM options, and overwrite those, set in
| gulpfile.js
|
*/
config.jspm = {
  bundles: [
    {
      options: [
        'build',
        'reflect-metadata + zone.js + app - app/mock/**/*',
        config.dist + '/js/app.js',
        '--minify',
        '--skip-source-maps'
      ],
      devOptions: [
        'build',
        'reflect-metadata + zone.js + app/main.dev.ts',
        config.dist + '/js/app.js',
        '--no-mangle'
      ]
    }
  ]
};

/*
|--------------------------------------------------------------------------
| TypeScript Linter
|--------------------------------------------------------------------------
|
| Define files to check for errors.
| All options are set in tslint.json.
|
*/
config.tslint = {
  src: config.src + '/js/**/*.ts'
};

/*
|--------------------------------------------------------------------------
| LESS Configuration
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| concatinated file name. You may also use less for styleUrls
| within angular.
|
*/
config.less = {
  src: config.src + '/css/app.less',
  dest: config.dist + '/css',
  name: 'app.css'
};

/* |--------------------------------------------------------------------------
| Index File Configuration (Main Entry Point)
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| file name.
| */
config.index = {
  src: './index.html',
  dest: config.dist,
  name: 'index.html'
};

/*
|--------------------------------------------------------------------------
| Assets Configuration
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| concatinated file name. Files will be copied as-is.
|
*/
config.assets = {
  src: config.src + '/assets/**/*',
  dest: config.dist + '/assets'
};

/*
|--------------------------------------------------------------------------
| Copy Configuration
|--------------------------------------------------------------------------
|
| Define additional files that should be copied.
|
*/
config.copy = [
  {
    base: './node_modules/materialize-css/fonts/roboto',
    src: ['/*'],
    dest: config.dist + '/assets/fonts/roboto'
  },
  {
    base: './node_modules/flat-color-icons/svg',
    src: ['/*.svg'],
    dest: config.dist + '/assets/icons'
  },
  {
    base: './node_modules/material-design-icons/iconfont',
    src: ['/*.eot', '/*.woff2', '/*.woff', '/*.ttf'],
    dest: config.dist + '/assets/fonts/iconfont'
  }
];

module.exports = config;
