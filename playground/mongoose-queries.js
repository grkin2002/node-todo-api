const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b98b728ab699c238887fd98';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
//   console.log('\n');
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
//   console.log('\n');
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));

const user_id = '5b9a1b7ab90be825d894d5dd';

User.findById(user_id)
  .then(user => {
    if (!user) {
      return console.log('Id not found');
    }
    console.log('User By Id', user);
    // mongoose.connection.close();
  }, (e) => {
    console.log(e);
  })
  .catch(e => console.log(e));
