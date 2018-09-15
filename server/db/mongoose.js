const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true});
// const db = mongoose.connect(
  // 'mongodb://greg:greg123@ds257752.mlab.com:57752/todo-app-api', { useMongoClient: true });

module.exports = { mongoose };
