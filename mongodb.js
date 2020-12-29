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

    //Fetch documents

   db.collection('users').findOne( { _id: new ObjectID("5feb1dd900e1be408cbe0b2a") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })


   db.collection('users').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })
    
    db.collection('users').find({ age: 27 }).count((error, count) => {
        console.log(count)
    })

db.collection('tasks').findOne( { _id: new ObjectID("5feb2316642cc44bf06e76cd") }, (error, task) => {
    if (error) {
        return console.log('Unable to fetch task');
    }

    console.log(task)
})

db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
        return console.log('Unable to fetch');
    }

    console.log(tasks)
})

})   
