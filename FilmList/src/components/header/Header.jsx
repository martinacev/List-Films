import React from 'react';
import PropTypes from 'prop-types'; 
import Languages from '../languages/Languages';
import classes from "./Header.module.css";

const Header = ({ onLanguageChange, title }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <Languages onLanguageChange={onLanguageChange} /> 
    </div>
  );
};

Header.defaultProps = {
  title : "Star Wars Films"
}

Header.PropTypes = {
  title: PropTypes.string,
}

export default Header;
