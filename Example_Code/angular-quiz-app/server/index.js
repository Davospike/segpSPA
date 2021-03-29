'use strict';

require('./bootstrap');

if (process.env.NEW_RELIC_LICENSE_KEY) {
  console.log('Enabling New Relic...');
  require('newrelic');
} else {
  console.log('New Relic not enabled.');
}

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const compress = require('compression');
const config = require('./config');
const app = express();

// Define font mime types
express.static.mime.define({
  'application/x-font-woff': ['woff'],
  'application/x-font-woff2': ['woff2'],
  'application/x-font-ttf': ['ttf']
});

console.log('');
console.log(`Server environment is ${process.env.NODE_ENV}`);
console.log(`Server public dir set to ${config.publicDir}`);

var basePath = process.env.API_BASE_PATH ? process.env.API_BASE_PATH : '/';

// Compress responses
app.use(compress());

// Request middleware

if (config.httpsRedirect) {
  app.use(require('./middleware/httpsRedirect'));
}

app.use(require('./middleware/isFile'));
app.use(express.static(path.join(__dirname, config.publicDir)));

// Routes
app.use(require('./routes/routes'));
app.use(path.join(basePath, 'api'), require('./routes/api'));

// Serve index if file does not exist
app.get('*', function(req, res, next) {
  if (!req.isFile) {
    return res.sendFile('index.html', {
      root: path.join(__dirname, config.publicDir)
    });
  }

  return next();
});

// Response middleware
app.use(methodOverride());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  errorHandler({
    dumpExceptions: !config.production,
    showStack: !config.production
  })
);

// Use port 5000 in development
var port = config.production ? process.env.PORT : 5000;
port = !port ? 5000 : port;

// Start the server
app.listen(port);

console.log(`Server listening on port ${port}`);
console.log('');
