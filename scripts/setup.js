// This file isn't transpiled, so must use CommonJS and ES5

/* eslint-disable import/no-extraneous-dependencies */

// Register babel to transpile before our tests run.
require('@babel/register')();
require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
