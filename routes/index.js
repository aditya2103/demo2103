var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(width, height) {
  return width * height;
};

