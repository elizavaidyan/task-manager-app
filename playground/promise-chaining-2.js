require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5fecc011ee88ab52c0a90509').then(() => {
    
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})