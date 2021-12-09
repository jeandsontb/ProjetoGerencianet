require('dotenv').config({path: '../.env.producao'});

const express = require('express');
const cors = require('cors');

const { saveOrder } = require('./lib/spreadSheet');
const { createPixCharge } = require('./lib/pix');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('foi');
})

app.post('/create-order', async (request, response) => {
  const pixCharge = await createPixCharge(request.body);
  const { qrcode, charge } = pixCharge;
  await saveOrder({...request.body, id: charge.txid});
  response.send({ok: 1, qrcode, charge})
})

app.listen(PORT, () => console.log('Server running in port '+PORT));