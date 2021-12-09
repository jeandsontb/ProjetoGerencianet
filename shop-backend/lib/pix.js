console.log(process.env.GN_ENV);

const https = require('https');
const axios = require('axios');
const fs = require('fs');

const APIProduction = 'https://api-pix.gerencianet.com.br';
const APIHomologation = 'https://api-pix-h.gerencianet.com.br';

const baseURL = process.env.GN_ENV === 'production' ? APIProduction : APIHomologation;

const getToken = async () => {
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
  return result.data;
}

const createCharge = async (accessToken, chargeData) => {
  const certificate = fs.readFileSync('../'+process.env.GN_CERTIFICADO);
  const data = JSON.stringify(chargeData);

  const agent = new https.Agent({
    pfx: certificate,
    passphrase: ''
  });

  const config = {
    method: 'POST',
    url: baseURL + '/v2/cob',
    headers: {
      Authorization: 'Bearer '+accessToken,
      'Content-type': 'application/json'
    },
    httpsAgent: agent,
    data: data
  }

  const result = await axios(config);

  return result.data;
}


const getLoc = async (accessToken, locId) => {
  const certificate = fs.readFileSync('../'+process.env.GN_CERTIFICADO);

  const agent = new https.Agent({
    pfx: certificate,
    passphrase: ''
  });

  const config = {
    method: 'GET',
    url: baseURL + '/v2/loc/'+locId+'/qrcode',
    headers: {
      Authorization: 'Bearer '+accessToken,
      'Content-type': 'application/json'
    },
    httpsAgent: agent
  }

  const result = await axios(config);

  return result.data;
}

const createPixCharge = async () => {
  const key = process.env.CHAVE_PIX;
  const token = await getToken();
  const accessToken = token.access_token;
  
  const cob = { 
    calendario: {
      expiracao: 3600
    },
    devedor: {
      cpf: '12345678909',
      nome: 'Jeandson Tenorio'
    },
    valor: {
      original: '10.50'
    },
    chave: key,
    solicitacaoPagador: 'Cobrança dos serviços prestados' 
  }

  const charge = await createCharge(accessToken, cob);

  const qrcode = await getLoc(accessToken, charge.loc.id);

  return {qrcode, charge};  
}

module.exports = {
  createPixCharge
}