import nodeMailer from "nodemailer"

const transporter= nodeMailer.createTransport({
  host:"smtp-relay.brevo.com",
  port:587,
  auth:{
    user:process.env.SMPT_USER,
    pass:process.env.SMPT_PASSWORD
  }
})

export default transporter;