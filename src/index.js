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