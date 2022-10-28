const sgMail = require('@sendgrid/mail')

const defEmail = process.env.SENDGRID_EMAIL
const sgApiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sgApiKey)

// ----------------------------------------------

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: defEmail,
        subject: 'Welcome to our Task App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: defEmail,
        subject: 'Cancelation confirmed',
        text: `${name}, why did you want to cancel the account?`
    })
}

module.exports = { 
    sendWelcomeEmail,
    sendCancelationEmail
}