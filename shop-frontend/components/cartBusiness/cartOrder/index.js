import React from 'react';
import Style from './styles';
import { useFormik } from 'formik';
import { useCard } from '../../context/CardContext';

const CartOrder = () => {

  const cart = useCard();

  const itemsCount = Object.keys(cart.card).reduce((prev, count) => {
    return prev + cart.card[count].quantity;
  }, 0);

  const total = Object.keys(cart.card).reduce((prev, count) => {
    return prev + cart.card[count].quantity * cart.card[count].prod.data.price;
  }, 0)

  return (
    <Style.Container>
      <Style.BoxInfo>
        
        <Style.BoxTitle>
          <Style.TitleInfo>
            SEU PEDIDO
          </Style.TitleInfo>
        </Style.BoxTitle>

        <Style.TextInfo>
          Informações do seu pedido:
        </Style.TextInfo>

        <Style.BoxDescription>
          <Style.TextDescription>Quantidade de Trufas</Style.TextDescription>
          <Style.TextResultDescription>{itemsCount}</Style.TextResultDescription>
        </Style.BoxDescription>

        <Style.BoxDescription>
          <Style.TextDescription>Total</Style.TextDescription>
          <Style.TextResultDescription>R$ {Number(total).toFixed(2).replace('.', ',')}</Style.TextResultDescription>
        </Style.BoxDescription>
      </Style.BoxInfo>
    </Style.Container>
  );
}

export default CartOrder;