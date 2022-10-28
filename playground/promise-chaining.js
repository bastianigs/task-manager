require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('635684e728a792e70319a90a', { age: 1 })
//         .then( user => {
//             console.log(user)
//             return User.countDocuments({age:1})
//         })
//         .then( result => console.log(result))
//         .catch( e => console.log('Error:',e))


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age:1})

    return count
}

updateAgeAndCount('6356981cd68923f8eaf6011e', 18)
        .then( count => console.log(count))
        .catch( e => console.log(e))