const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser :true,
    useCreateIndex: true
})


//Create User Model

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

//Create instance of User Model
const me = new User({
    name: 'Angel',
    age: 27
})

//Save instance to the databse

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})



//Create a Task Model

const Task = new mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

//Create an instance of Task model

const cleaning = new Task ({
    description: 'Cleaning the house',
    completed: false
})

//Save the cleaning instance to the databse

cleaning.save().then(() => {
    console.log(cleaning)
}).catch((error) => {
    console.log('Error!', error)
})