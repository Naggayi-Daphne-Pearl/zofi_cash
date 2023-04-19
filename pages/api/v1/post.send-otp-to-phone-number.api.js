export default async function handler(req, res) {
  if(req.method !== 'POST')
    return res.json({status: 400, errors: `${req.method} not allowed.`});
  try {
    fetch(
      'https://staging-auth-api.zoficash.com/api/v1/send-otp-to-phone-number',
      {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.parse(req.body)
      }
    )
    .then(response => res.json({status: 200, data: response}))
  } catch (error) {
    console.log('error', error);
    return res.json({status: 400, errors: error});
  }
}
