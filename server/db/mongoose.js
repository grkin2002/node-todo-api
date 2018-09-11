const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/TodoApp',{
    useMongoClient: true,
    keepAlive: false
  });

module.exports = {mongoose};