require('../src/db/mongoose')
const Task = require('../src/models/task')

/*
Task.findByIdAndDelete('5fecc011ee88ab52c0a90509').then(() => {
    
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

*/

// Delete Task And Count Using Async-await

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( { completed: false })
    return count
}

deleteTaskAndCount('5fec63a8b19b7a4e880a5d7d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})