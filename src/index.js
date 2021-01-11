const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task');
const { update } = require('./models/user');
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express();
const port = process.env.PORT || 3000

/*
app.use((req, res, next) => {
    // console.log(req.method, req.path)
    // next()

    if (req.method === 'GET') {
        res.send('GET requests are disabled')
    } else {
        next()
    }
})
*/

/*
app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon')
})

*/

app.use(express.json())   //to automatically pass incoming Jason to an object so we can access it in our request handlers.
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {

    //Create token
   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
   console.log(token)

   //Verify token
   const data = jwt.verify(token, 'thisismynewcourse')
   console.log(data)
   
}

myFunction()