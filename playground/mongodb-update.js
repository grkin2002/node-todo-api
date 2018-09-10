const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5b95cefd49e217e8f62da8d8')
    //   }, {
    //   $set: {completed: true}
    //  }, {
    //    returnOriginal: false
    //  })
    //  .then((result)=> {
    //   console.log(result);
    //  });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b94bcc58451b8a038e33a14')
    }, {
      $set: {name: 'Andrew Mead'},
      $inc: {age: 1}
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    });
    // db.close();
  }
);
