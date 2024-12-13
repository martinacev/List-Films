import React from 'react';
import FilmList from '../filmlist/FilmList'; 

const Main = ({ language }) => {
  return (
    <main>
      <FilmList language={language} />
    </main>
  );
};

export default Main;
