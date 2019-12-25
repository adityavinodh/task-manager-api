const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditya@adityaone.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how you get along with it.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditya@adityaone.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Is there anything we could have done to improve your experience? Please let us know. Thank you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
