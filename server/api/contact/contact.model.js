'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: String,
  tel: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);