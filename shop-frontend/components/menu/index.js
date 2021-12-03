import React from 'react'
import Style from './styles'

const CartIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6 mx-1.5" fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
  />
</svg>
);

const Menu = () => {
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
              Carrinho<CartIcon />
            </Style.LinkMenu>
          </Style.TextMenu>
        </Style.ListMenu>
      </Style.BoxMenu>
    </Style.Container>
  );
}

export default Menu;