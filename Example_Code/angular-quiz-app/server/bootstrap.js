"use strict";

console.log('Starting server...');

const path = require('path');
const fs = require('fs');
const env = require('node-env-file');
const config = require('./config');

const envFile = path.join(__dirname, '/.env');

let envFileExists = fs.existsSync(envFile);

if (!config.production && !envFileExists) {
    fs.writeFileSync(envFile, fs.readFileSync(`${envFile}.example`));
}

if (envFileExists) {
  env(`${__dirname}/.env`);
  console.log(`Loaded env vars from file.`);
}
