// grab env variables
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 5000
const mailjetPublicKey = process.env.MAILJET_PUBLIC
const mailjetPrivateKey = process.env.MAILJET_PRIVATE

// set up mail client
const mailjetClient = require('node-mailjet')
  .connect(mailjetPublicKey, mailjetPrivateKey)

// set up express service
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'dev') {
  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

  app.use(cors(corsOptions))
}

app.use(express.static('dist'))

// mail service endpoint
app.post('/mail', async (req, res) => {
  const { name, email, message } = req.body

  // thanks to sender
  await sendMail({
    toMail: email,
    toName: name,
    fromMail: 'per@lndstrm.se',
    fromName: 'Per Lindström',
    message: 'Thanks for your message, will get back to you ASAP.',
    subject: 'Thank you'
  }).catch((err) => {
    console.log('error on thanks-mail', err)
  })

  // form submission
  sendMail({
    toMail: 'per@lndstrm.se',
    toName: 'Per Lindström',
    fromMail: email,
    fromName: name,
    message,
    subject: `New form submission from portfolio contact form [${name}/${email}]`
  }).then(() => {
    res.status(200).send('ok')
  }).catch((err) => {
    res.status(500).send(err)
  })
})

async function sendMail ({ toMail, toName, fromMail, fromName, subject, message }) {
  await mailjetClient
    .post('send', { 'version': 'v3.1' })
    .request({
      'Messages': [{
        'From': {
          'Email': fromMail,
          'Name': fromName
        },
        'To': [{
          'Email': toMail,
          'Name': toName
        }],
        'Subject': subject,
        'TextPart': message
      }]
    })
}

app.listen(port, '0.0.0.0', () => console.log(`server listening on port ${port}!`))
