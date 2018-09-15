const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b9ba1de440a8f18dc7136e0')
// .then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({ _id: '5b9ba1de440a8f18dc7136e1' })
  .then((todo) => {
    console.log(todo);
  });
