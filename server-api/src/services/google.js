import axios from 'axios';

const getAccessTokenFromCode = async (code) => {
  const res = await axios.post(`https://oauth2.googleapis.com/token`, {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    grant_type: 'authorization_code',
    code
  })
  return res.data.access_token
};

async function getAccountInfo(access_token) {
  const res = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  return res.data;
};

export default {
  getAccessTokenFromCode,
  getAccountInfo
}