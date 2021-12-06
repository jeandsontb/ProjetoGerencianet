import React from 'react';
import { useCard } from '../context/CardContext';

import Style from './styles';

const CartBussiness = () => {

  const cart = useCard();
  const remove = id => () => {
    cart.removeFromCat(id);
  }

  const onChangeQuantity = (id) => (evt) => {
    cart.changeQuantity(id, Number(evt.target.value));
  }

  return (
    <Style.Container>
      <Style.BoxCart>        

        <Style.BoxItems>
          <div className="image" />

          <div className="items">
          <div className="box-items">
            <strong>
              <h2>PRODUTO</h2>
            </strong>
          </div>
          <div className="box-items">
            <strong>
              <h2>QUANTIDADE</h2>
            </strong>
          </div>
          <div className="box-items">
            <strong>
              <h2>PREÇO UNITÁRIO</h2>
            </strong>
          </div>
          <div className="box-items">
            <strong>
              <h2>PREÇO TOTAL</h2>
            </strong>
          </div>
        </div>
        </Style.BoxItems>

        {Object.keys(cart.card).map(key => {

          const {prod, quantity} = cart.card[key];

          return (
            <Style.BoxItems key={key}>
              <div className="image">
                <img src={prod.data.image.url} alt={prod.data.name} />
              </div>

              <div className="items">
              <div className="box-items">
                <h2>{prod.data.name}</h2>
                <button onClick={remove(key)}>( Remover Item )</button>
              </div>
              <div className="box-items">
                <input
                  type="number"
                  defaultValue={quantity}
                  onBlur={onChangeQuantity(key)}
                />
              </div>
              <div className="box-items">
                <h2>R$ {prod.data.price}</h2>
              </div>
              <div className="box-items">
                <h2>R$ {prod.data.price * quantity}</h2>
              </div>
            </div>
            </Style.BoxItems>
          );
        })}

      </Style.BoxCart>
    </Style.Container>
  )
}

export default CartBussiness;