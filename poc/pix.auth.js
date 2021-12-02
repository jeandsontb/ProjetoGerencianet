require('dotenv').config({path: '../.env.homologacao'});
console.log(process.env.GN_ENV);

const https = require('https');
const axios = require('axios');
const fs = require('fs');

const APIProduction = 'https://api-pix.gerencianet.com.br';
const APIHomologation = 'https://api-pix-h.gerencianet.com.br';

const baseURL = process.env.GN_ENV === 'producao' ? APIProduction : APIHomologation;

const getToken = async () => {
  console.log('getToken ', process.env.GN_ENV);
  const certificate = fs.readFileSync('../'+process.env.GN_CERTIFICADO);
  const credentials = {
    client_id: process.env.GN_CLIENT_ID,
    client_secret: process.env.GN_CLIENT_SECRET
  }

  const data = JSON.stringify({ grant_type: 'client_credentials' });
  const dataCredentials = credentials.client_id + ':' + credentials.client_secret;
  const auth = Buffer.from(dataCredentials).toString('base64');

  const agent = new https.Agent({
    pfx: certificate,
    passphrase: ''
  });

  const config = {
    method: 'POST',
    url: baseURL + '/oauth/token',
    headers: {
      Authorization: 'Basic '+auth,
      'Content-type': 'application/json'
    },
    httpsAgent: agent,
    data: data
  }

  const result = await axios(config);
  console.log(result.data);
}

getToken();
