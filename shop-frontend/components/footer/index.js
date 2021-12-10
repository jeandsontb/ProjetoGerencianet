import React from 'react';
import { IconFire } from '../iconsJs';
import Style from './styles';

const Footer = () => {
  return (
    <Style.Container>
      <Style.BoxDescription>
        <Style.TextFooter>
          Todos os direitos reservados, by Jeandson 
        </Style.TextFooter>
        <IconFire />
      </Style.BoxDescription>
    </Style.Container>
  );
}

export default Footer;