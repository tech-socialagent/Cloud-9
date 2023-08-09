import axios from 'axios';
import querystring from 'querystring';
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  origin: 'https://campaign.prasiddhigroup.com/', // Replace with your deployed website's URL
  methods: ['POST', 'GET'], // Add the allowed HTTP methods here
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
    const response = await axios.post(tokenEndpoint, requestData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Handle the response data
    const accessToken = response.data.access_token;
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
        console.log('Error creating lead:', error);
      });

    // Return the response to the client
    return res.status(200).json(sendData);
  } catch (error) {
    // Handle errors
    console.log('Error getting access token:', error.response);
    return res.status(500).json({ error: 'Failed to get access token' });
  }
}



//Zoho Code

var myHeaders = new Headers();
myHeaders.append("Authorization", "Zoho-oauthtoken 1000.8ed1axxxxxxxxx19c3.575e8e50556a68e6da75a781ff4591ec");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "34561a6e49=05e68ae6a7c2f7d782946ef8f4a221ad; 941ef25d4b=26e785490eba82a048fdbe4337cde743; JSESSIONID=98F6C57287188F34D90E33B9E4949DBD; _zcsr_tmp=55d82305-d053-40d3-998a-530693ac4c30; crmcsr=55d82305-d053-40d3-998a-530693ac4c30");

var raw = JSON.stringify({
"data": [
{
"Company": "API testing 1243",
"Last_Name": "testings",
"Lead_Status": "Contacted ",
"Email": "test@gmail.com",
"Phone": "66655457444",
"Mobile": "89656898765"
}
]
});

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("https://www.zohoapis.in/crm/v2/Leads", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));