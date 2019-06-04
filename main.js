const mongoose = require('mongoose');
const User = require('./models/User');
const Packages = require('./models/Packages');


mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.connection
    .once('open', () => console.log('Connected to the database'))
    .on('error', (err) => {
        console.log('ERROR :', err)
    });


// TESTING!!!
// const newpackages = new Packages({

//     _id: new mongoose.Types.ObjectId(),
//     name: 'Sanjay',
//     description: 'Checking',
//     location: {
//         type: 'Point',
//         coordinates: [102.333, 104.222]
//     },
//     duration: 5,
//     conditions: ['Checking', '1', '2'],


// });

// newpackages.save(function (err, dataSaved) {
//     if (err) return console.log(err);

//     const newuser = new User({

//         first_name: 'Sanjay',
//         email: 'sivasanjay8@gmail.com',
//         phone: 9500006153,
//         password: 'Hello',
//         packages: newpackages._id,
//     });

//     newuser.save(function (err, dataSaved) {
//         if (err) return console.log(err);
//         console.log(dataSaved);
//     });
// })