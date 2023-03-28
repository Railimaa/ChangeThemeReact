import React from 'react';

import { Container } from './styles';

export default function Header({ onToogleTheme, Selectedtheme }) {
  return (
    <Container>
      <h1>FFnotic's Blog</h1>
      <button type="button" onClick={onToogleTheme}>
          {Selectedtheme === 'dark' ?  '🌞' : '🌚'}           
      </button>
    </Container>
  );
}