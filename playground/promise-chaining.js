require('../src/db/mongoose')
const User = require('../src/models/user')

//Update user by finding by ID
/*
User.findByIdAndUpdate('5fec909d2605b141a0970e45', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/
//Update age and count (Using async-await)

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5fec909d2605b141a0970e45', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})