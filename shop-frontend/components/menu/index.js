import React from 'react';
import Style from './styles';

import { CartIcon } from '../iconsJs';
import { useCard } from '../context/CardContext';

const Menu = () => {

  const card = useCard();
  // const itemsCount= Object.keys(card.card).length;
  const itemsCount = Object.keys(card.card).reduce((prev, count) => {
    return prev + card.card[count].quantity;
  }, 0);

  return (
    <Style.Container>
      <Style.BoxLogo>
        <Style.ImageLogo src="/trufas.png" alt="trufas" />
        <Style.TextLogo>Trufas Huuuummmmm</Style.TextLogo>
      </Style.BoxLogo>

      <Style.BoxMenu>
        <Style.ListMenu>
          <Style.TextMenu>
            <Style.LinkMenu href="#">
             Home
            </Style.LinkMenu>
          </Style.TextMenu>
          <Style.TextMenu>
            <Style.LinkMenu href="#">        
              Contato
            </Style.LinkMenu>
          </Style.TextMenu>
          <Style.TextMenu>
            <Style.LinkMenu href="#">
              Carrinho
              {itemsCount > 0 && <span> ({itemsCount})</span>} 
              <CartIcon />
            </Style.LinkMenu>
          </Style.TextMenu>
        </Style.ListMenu>
      </Style.BoxMenu>
    </Style.Container>
  );
}

export default Menu;