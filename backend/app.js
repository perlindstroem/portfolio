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

app.get('/exp-data', (req, res) => {
  const { filter } = req.query

  const experience = [
    {
      title: 'Associate',
      company: 'Digital Edge',
      companyUrl: 'https://digitaledge.se',
      start: '2019-09',
      end: null,
      description: [
        'Working as a full stack or machine learning engineer depending on project assignment. Projects include; text classification and natural language processing, data aggregation  and visualisation, as well as a product planning tool for industrial manufacturing.'
      ]
    },
    {
      title: 'Research Intern',
      company: 'Signality',
      companyUrl: 'https://signality.com',
      start: '2019-01',
      end: '2019-07',
      description: [
        'Conducted research on imitation learning. Developed deep learning models for player behaviour modeling. Wrote a master\'s thesis and research paper based on the findings.'
      ]
    },
    {
      title: 'Lead Software Engineer',
      company: 'Skira',
      companyUrl: 'https://skira.se',
      start: '2018-01',
      end: '2019-02',
      description: [
        'Hired to help the founders build the technical platform for grain trading. Worked with the CTO to plan and implement the platform from being an idea to a live product.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'GOLI',
      companyUrl: 'https://goli.nu',
      start: '2017-05',
      end: '2017-12',
      description: [
        'Worked with the whole technical stack on a production and capacity planning application for the healthcare industry. Integrated several third party systems to feed production data into the application.'
      ]
    }
  ]

  const result = filter ? experience.filter(({ description }) => description[0].includes(filter)) : experience

  res.status(200).send(result)
})

app.listen(port, '0.0.0.0', () => console.log(`server listening on port ${port}!`))
