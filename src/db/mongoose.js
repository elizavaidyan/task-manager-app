const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser :true,
    useCreateIndex: true
})

//Create User Model

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim:true,  //To remove space before and after
        lowercase:true,    //to convert the email to lowercase before saving it.
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type:String,
        required:true,
        minLength:7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {  //function, adds a validation function for this property
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

//Create instance of User Model
const me = new User({
    name: '   Anu   ',
     //age: 27
    //age: -1
    email: '  anu@GMAIL.COM  ',
    password: 'anu1234'
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

//Save the cleaning instance to the databse

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})

