'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  nodo: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('User', userSchema);
