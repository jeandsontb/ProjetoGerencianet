import React, { useState } from 'react';
import Style from './styles';
import { useFormik } from 'formik';
import { useCard } from '../../context/CardContext';
import { IconPresent } from '../../iconsJs';
import axios from 'axios';

const CartForm = () => {

  const [ orderStatus, setOrderStatus ] = useState('pre-order'); // ordering, order-received 
  const [ qrcode, setQrcode ] = useState('');
  const cart = useCard();
  const form = useFormik({
    initialValues: {
      cpf: '',
      name: '',
      phone: '',
    },
    onSubmit: async (values) => {

      const order = {...values};
      const items = Object.keys(cart.card).map((current) => {
        const item = {
          quantity: cart.card[current].quantity,
          price: cart.card[current].prod.data.price,
          name: cart.card[current].prod.data.name
        }
        return item;
      });

      order.items = items;
      setOrderStatus('ordering');
      const result = await axios.post('http://localhost:3333/create-order', order);
      setQrcode(result.data.qrcode.imagemQrcode);
      setOrderStatus('order-received');
    }
  });

  return (
    <Style.Container>
      <Style.BoxForm onSubmit={form.handleSubmit}>
        <Style.BoxTitle>
          <Style.TextTitle>SEUS DADOS</Style.TextTitle>
        </Style.BoxTitle>

        {orderStatus === 'pre-order' &&
          <>
            <Style.TextInfo>
              Por favor, informe seus dados abaixo para concluir
            </Style.TextInfo>

            <Style.BoxInput>
            <Style.LabelForm>Informe seu nome: </Style.LabelForm>
            <Style.InputForm 
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              value={form.values.name}
              onChange={form.handleChange}
            />
            </Style.BoxInput>

            <Style.BoxInput>
            <Style.LabelForm>Informe seu CPF: </Style.LabelForm>
            <Style.InputForm 
              type="text"
              name="cpf"
              id="cpf"
              placeholder="Seu CPF"
              value={form.values.cpf}
              onChange={form.handleChange}
            />
            </Style.BoxInput>

            <Style.BoxInput>
            <Style.LabelForm>Informe seu telefone: </Style.LabelForm>
            <Style.InputForm 
              type="text"
              name="phone"
              id="phone"
              placeholder="Seu telefone"
              value={form.values.phone}
              onChange={form.handleChange}
            />
            </Style.BoxInput>

            <Style.BoxInput>
              <Style.ButtonForm type="submit">
                Concluir Pedido <IconPresent />
              </Style.ButtonForm>
            </Style.BoxInput>
          </>
        }

        {orderStatus === 'ordering' &&
          <p>Processando pedido... aguarde!</p>
        }

        {orderStatus === 'order-received' &&
          <>
            <p>Efetue o pagamento com o QRCode abaixo.</p>
            <img src={qrcode} />
          </>
        }
      </Style.BoxForm>
    </Style.Container>
  );
}

export default CartForm;