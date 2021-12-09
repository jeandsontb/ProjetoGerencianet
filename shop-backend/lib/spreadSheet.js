require('dotenv').config({path: '../.env.homologacao'});
const { v4 } = require('uuid');

const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('1yKypj5H_SXBNpbM14gn_WrmxcwBhVIYRYhhlg9ExwFk');
const credentials = require('../credentialsAPI.json');

const saveOrder = async (order) => {

  await doc.useServiceAccountAuth({
    client_email: process.env.EMAIL_GOOGLE_API,
    private_key: credentials.private_key
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[1];

  const orderId = order.id;
  const total = order.items.reduce((prev, curr) => {
    return prev + curr.price * curr.quantity
  }, 0);
  const rows = order.items.map(item => {
    const row = {
      'Pedido': orderId,
      'Nome Cliente': order.name,	
      'Telefone Cliente': order.phone,	
      'Produto': item.name,
      'Quantidade': item.quantity,
      'Valor Unitario': item.price,	
      'Subtotal': item.price * item.quantity,	
      'Total Pedido': total,	
      'Status': 'Aguardando Pagamento',
      'CPF': order.cpf
    }
    return row;
  })
  
  await sheet.addRows(rows)
}

module.exports = {
  saveOrder
}