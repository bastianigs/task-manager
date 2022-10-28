const mongoose = require( 'mongoose' );

mongoose.connect( process.env.MONGODB_URL );

// ---------------------------------------------------------

// const me = new User({
//     name: '   Sebastian',
//     email: '    cOtes@gGGogle.com     ',
//     password: '   guilty'
// });

// me.save()
//     .then( result => console.log( result ) )
//     .catch( error => console.log( 'Error:', error ) );

// ---------------------------------------------------------

// const task = new Task({
//     description: '              Getting better in Mongoose library! So much information though c:'
// });

// task.save().then( res => console.log('New task added: ' + res.description))
//             .catch( err => console.log( 'Error happened!' ));