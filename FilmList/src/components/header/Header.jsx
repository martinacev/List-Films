import React from 'react';
import Languages from '../languages/Languages';

const Header = ({ onLanguageChange }) => {
  return (
    <header>
      <h1>Star Wars Films</h1>
      <Languages onLanguageChange={onLanguageChange} /> 
    </header>
  );
};

export default Header;
