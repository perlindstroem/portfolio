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
app.post('/mail', (req, res) => {
  const { name, email, message } = req.body

  mailjetClient
    .post('send', { 'version': 'v3.1' })
    .request({
      'Messages': [{
        'From': {
          'Email': 'per@lndstrm.se',
          'Name': name
        },
        'To': [{
          'Email': 'per@lndstrm.se',
          'Name': 'Per Lindström'
        }],
        'Subject': `new form submission from portfolio [${name}/${email}]`,
        'TextPart': message
      }]
    })
    .then(() => {
      res.status(200).send('ok')
    }).catch((err) => {
      res.status(500).send(err)
    })
})

app.listen(port, '0.0.0.0', () => console.log(`server listening on port ${port}!`))
