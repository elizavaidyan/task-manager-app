//CRUD - Create Read Update Delete

// const mongodb = require('mongodb');
// const mongoclient = mongodb.MongoClient;   //To initialize mongodb connection
// const objectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';   //mondodb://ip:port; It is recommended to use ip address instead 'localhost'
const databaseName = 'task-manager';

// Create Object ID

const id = new ObjectID();
console.log(id);
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp())

//Connect to the database

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {  
    if (error) {
        return console.log('Unable to connect to database')
    }

    //Create database

    const db = client.db(databaseName);

    //Create collection and insert documents

  /*  db.collection('users').insertOne({
        //_id: id,
        name: 'Vikram',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert');
        }

        console.log(result.ops);  //ops is an array of documents inserted
    })  */

 /*   db.collection('users').insertMany([
        {
            name: 'Andrew',
            age: 28
        }, {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert')
        }

        console.log(result.ops)
    })  */

 /*   db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Plot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks');
        }

        console.log(result.ops)
    })

*/


})   
