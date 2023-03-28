import React from 'react';

import { Container } from './styles';

export default function Footer({ onToogleTheme, Selectedtheme }) {
  return (
    <Container>
      <span>FFnotic's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToogleTheme}>
        {Selectedtheme === 'dark' ?  '🌞' : '🌚'}
      </button>
    </Container>
  );
}