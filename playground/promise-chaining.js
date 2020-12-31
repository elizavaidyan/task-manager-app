require('../src/db/mongoose')
const User = require('../src/models/user')

//Update user by finding by ID

User.findByIdAndUpdate('5fec909d2605b141a0970e45', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})