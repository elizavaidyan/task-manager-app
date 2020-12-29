//CRUD - Create Read Update Delete

// const mongodb = require('mongodb');
// const mongoclient = mongodb.MongoClient;   //To initialize mongodb connection
// const objectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';   //mondodb://ip:port; It is recommended to use ip address instead 'localhost'
const databaseName = 'task-manager';


//Connect to the database

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {  
    if (error) {
        return console.log('Unable to connect to database')
    }

    //Create database

    const db = client.db(databaseName);

    //Delete documents

  db.collection('users').deleteMany({
        age: 27, 
        name: 'Angel'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) 

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
 
})   
