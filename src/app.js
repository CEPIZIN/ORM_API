const express = require('express');
const routes = require('./Routes')

const app = express();
routes(app)

module.exports = app;