const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser :true,
    useCreateIndex: true
})


//Create a Task Model

const Task = new mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

//Create an instance of Task model

const task = new Task ({
    description: '  Plot the plants  ',
    //completed: false
})


