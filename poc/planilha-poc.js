require('dotenv').config({path: '../.env.homologacao'});
const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('1yKypj5H_SXBNpbM14gn_WrmxcwBhVIYRYhhlg9ExwFk');
const credentials = require('../credentialsAPI.json');

const run = async () => {

  await doc.useServiceAccountAuth({
    client_email: process.env.EMAIL_GOOGLE_API,
    private_key: credentials.private_key
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[1];
  
  await sheet.addRows([
    {
      'Pedido': 123,
      'Nome Cliente': 'Kayo Ryan',	
      'Telefone Cliente': '87 999243529',	
      'Produto': 'Trufa Bizz',
      'Quantidade': 1,	
      'Subtotal': 5,	
      'Total Pedido': 5,	
      'Status': 'Aguardando Pagamento'
    },
  ])
}

run();