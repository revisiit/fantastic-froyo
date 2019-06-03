const mongoose = require('mongoose');
const User =require('./models/User');


mongoose.connect('mongodb://localhost:27017/db',{useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.connection
    .once('open',()=>console.log('Connected to the database'))
    .on('error',(err)=>{
        console.log('ERROR :',err)
    });

// const newuser =new User({               Checking the database
    
//     first_name: 'Sanjay',
//     email:'sivasanjay7@gmail.com',
//     phone: 9500006153,
//     password:'Hello',
// });

// newuser.save(function(err,dataSaved){
//     if(err) return console.log(err);
//     console.log(dataSaved);
// });