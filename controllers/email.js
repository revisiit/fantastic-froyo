const nodemailer = require('nodemailer')
const Email = require('email-templates')
const config = require('../config')

// Storing the sender email details

if (!config.email) {
  console.error('please enter email creds in config file')
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password,
  },
})

module.exports = {
  sendWelcomeMail: function(user) {
    const email = new Email({
      transport: transporter,
      send: true,
      preview: false,
    })

    // .send contains the message to be sent to the registered user and send the mail using nodemailer

    email
      .send({
        template: 'Welcome',
        message: {
          to: 'sivasanjay7@gmail.com',
          subject: 'Welcome to Visiit',
        },
        locals: {
          name: user.first_name,
        },
      })
      .then(info => {
        console.log('Email sent:' + info.response)
      })
      .catch(err => {
        console.log('Error in sending :' + err)
      })
  },
}
