require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63569a95a4585987a6edf822')
//         .then( () => Task.countDocuments({completed:false}))
//         .then( result => console.log('Total incomplete tasks left:',result))
//         .catch( e => console.log('Error:',e))

const deleteTaskAndCount = async id => {
        const task = await Task.findByIdAndDelete(id)
        const count = await Task.countDocuments({completed:false})

        return count
}

deleteTaskAndCount('63569735c2311d60be91afc8')
        .then( count => console.log(count) )
        .catch( e => console.log(e) )