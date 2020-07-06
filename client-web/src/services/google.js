import QueryString from 'query-string';

const stringifiedParams = QueryString.stringify({
  client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  redirect_uri: process.env.VUE_APP_GOOGLE_REDIRECT_URI,
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '),
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

export default {
  googleLoginUrl
}