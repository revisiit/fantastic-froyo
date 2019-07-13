const nodemailer = require('nodemailer')
const Email = require('email-templates')

// Storing the sender email details

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'haventcreatedone@gmail.com',
    pass: 'password',
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

    Email.send({
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
