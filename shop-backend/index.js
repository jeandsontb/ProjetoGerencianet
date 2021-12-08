const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('foi');
})

app.post('/create-order', async (request, response) => {
  console.log(request.body);
  response.send({ok: 1})
})

app.listen(PORT, () => console.log('Server running in port '+PORT));