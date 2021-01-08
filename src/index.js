const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task');
const { update } = require('./models/user');
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())   //to automatically pass incoming Jason to an object so we can access it in our request handlers.
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'    //plaintext password
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()