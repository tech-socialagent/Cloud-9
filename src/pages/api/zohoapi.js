import axios from 'axios';
import querystring from 'querystring';
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  origin: 'https://campaign.prasiddhigroup.com/', // Replace with your deployed website's URL
  methods: ['POST','GET'], // Add the allowed HTTP methods here
});

// Helper function to apply the cors middleware to the API route
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {

  await runMiddleware(req, res, cors);

  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const scope = 'ZohoCRM.modules.ALL';

  const tokenEndpoint = 'https://accounts.zoho.in/oauth/v2/token';
  const LeadEndpoint = 'https://www.zohoapis.in/crm/v2/Leads';

  const requestData = querystring.stringify({
    grant_type: 'refresh_token',
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    scope: scope
  });


  try {
    // const response = await axios.post(tokenEndpoint, requestData, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });

    // Handle the response data
    const accessToken = "1000.d0e9f6ef1078ebb2f6d6a2ee2a232956.8f96698cc6420fdf56ba677ac01595d4";
    //Send Data to Zoho Leads

    const jsonData = JSON.stringify(req.body);

    const sendData = axios.post(LeadEndpoint, jsonData, {
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Lead created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating lead:', error.message);
      });

    // Return the response to the client
    return res.status(200).json(sendData.data);
  } catch (error) {
    // Handle errors
    console.error('Error getting access token:', error.response);
    return res.status(500).json({ error: 'Failed to get access token' });
  }
}

