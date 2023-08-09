import axios from 'axios';
import qs from 'qs';

export default async function handler(req, res) {

  const formData = req.body

  const refreshToken = '1000.ff65beba525dfa8799d8b9b3f67e92ae.40cf247a4a0b2931929d51342a2e702f';
  const clientId = '1000.RVZIBJI2A0VQT596B34R8TG41DUCHH';
  const clientSecret = 'f5077f55a1bd904fa4d2518829c62c628fdc514349';
  const scope = 'ZohoCRM.modules.ALL';

  // Request a new access token
  const tokenData = qs.stringify({
    'refresh_token': refreshToken,
    'client_id': clientId,
    'client_secret': clientSecret,
    'grant_type': 'refresh_token'
  });

  const tokenConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://accounts.zoho.in/oauth/v2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': '6e73717622=94da0c17b67b4320ada519c299270f95; JSESSIONID=0941E4590D108B6860C438EB6ADA43E1; _zcsr_tmp=24793a85-6b76-4255-9fe2-cd3da4f7a86a; iamcsr=24793a85-6b76-4255-9fe2-cd3da4f7a86a'
    },
    data: tokenData
  };

  try {
    const tokenResponse = await axios.request(tokenConfig);
    const accessToken = tokenResponse.data.access_token;

    // Data to send
    const leadData = {
      "data": [
        {
          "Last_Name": formData.name,
          "Email": formData.email,
          "Phone": formData.phone,
        }
      ]
    };

    // Send data to Zoho CRM
    const sendDataConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://www.zohoapis.in/crm/v2/Leads',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
        'Cookie': '34561a6e49=05e68ae6a7c2f7d782946ef8f4a221ad; 941ef25d4b=7ffffcd8c579c5153eec9c92245498b5; _zcsr_tmp=dccbf6e7-fe4a-4377-a623-ac601f5d1e1c; crmcsr=dccbf6e7-fe4a-4377-a623-ac601f5d1e1c'
      },
      data: leadData
    };

    try {
      const sendDataResponse = await axios.request(sendDataConfig);
      console.log('Data sent successfully:', sendDataResponse.data);
      res.status(200).json({ message: 'Data has been successfully sent' });
    } catch (sendDataError) {
      console.log('Error sending data:', sendDataError.response.data);
      res.status(400).json({ error: 'Error sending data to Zoho CRM' });
    }
  } catch (tokenError) {
    console.log('Error getting access token:', tokenError.response.data);
    res.status(400).json({ error: 'Error getting access token' });
  }
}
