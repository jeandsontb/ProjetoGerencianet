import React from 'react';
import Style from './styles';
import { CartIcon } from '../iconsJs';
import { useCard } from '../context/CardContext';

const Card = ({dataCard}) => {

  const card = useCard();
  const { product } = dataCard;
  const add = prod => () => {
    card.addToCard(prod)
  }

  return (
    <Style.Container>
      <Style.SubContainer>        
        {product.map((prod, key) => (
          <Style.BoxCard key={key}>
            <Style.BoxCardTop>
              <Style.ImgCard src={prod.data.image.url} />
            </Style.BoxCardTop>

            <Style.BoxCardBottom>
              <Style.TextCardTitle>
                {prod.data.name}
              </Style.TextCardTitle>
              <Style.TextCardPrice>
                R$ {Number(prod.data.price).toFixed(2).replace('.', ',')}
              </Style.TextCardPrice>
              <Style.ButtonCard onClick={add(prod)}>
                Adicionar no carrinho <CartIcon />
              </Style.ButtonCard>
            </Style.BoxCardBottom>
          </Style.BoxCard>
        ))}

      </Style.SubContainer>
    </Style.Container>
  );
}

export default Card;