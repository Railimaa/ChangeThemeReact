import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToogleTheme, Selectedtheme }) {
  return (
    <>
      <Header 
        onToogleTheme={onToogleTheme}
        Selectedtheme={Selectedtheme}
      />
      <PostsList />
      <Footer 
        onToogleTheme={onToogleTheme}
        Selectedtheme={Selectedtheme}
      />
    </>
  );
}
