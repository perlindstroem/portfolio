import querystring from 'querystring'

const mailjet = require('node-mailjet')
  .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

exports.handler = (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'method not allowed' }
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body)

  const name = params.name || 'none'
  const email = params.email || 'none'
  const message = params.message || 'none'

  mailjet
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
      callback(null, {
        statusCode: 200,
        body: 'ok'
      })
    }).catch((err) => {
      callback(null, {
        statusCode: 422,
        body: `something went wrong, ${err}`
      })
    })
}
