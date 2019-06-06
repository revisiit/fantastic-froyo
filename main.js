const mongoose = require('mongoose');
const User = require('./models/User');
const Package = require('./models/Package');
const Iternary = require('./models/Iternary');
const Category = require('./models/Category');

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.connection
    .once('open', () => console.log('Connected to the database'))
    .on('error', (err) => {
        console.log('ERROR :', err)
    });


// // TESTING!!!

// const newiternary = new Iternary({

//     iternary_id: new mongoose.Types.ObjectId(),
//     day: 7,
//     content: ['iternary-1', 'iternary-2'],
// })

// newiternary.save(function (err, dataSaved) {
//     if (err) return console.log(err);

//     const newpackages = new Package({

//         package_id: new mongoose.Types.ObjectId(),
//         name: 'Coorg',
//         description: 'Checking',
//         location: {
//             type: 'Point',
//             coordinates: [102.333, 104.222]
//         },
//         duration: 5,
//         iternary: newiternary.iternary_id,
//         conditions: ['Checking', '1', '2'],


//     });

//     newpackages.save(function (err, dataSaved) {
//         if (err) return console.log(err);

//         const newuser = new User({

//             first_name: 'Sanjay',
//             email: 'checking-8@gmail.com',
//             phone: 9500006153,
//             password: 'Hello',
//             packages: newpackages.package_id,
//         });

//         newuser.save(function (err, dataSaved1) {
//             if (err) return console.log(err);
//             console.log(dataSaved1);
//         });

// const newcategory = new Category({

//     name: 'Romance',
//     packages:[newpackages],


// })

// newcategory.save(function (err, dataSaved2) {
//     if (err) return console.log(err);
//     console.log(dataSaved2);
// });
 
// })

// })