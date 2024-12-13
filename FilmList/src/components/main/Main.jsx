import React from 'react';
import FilmList from '../filmlist/FilmList'; 
import classes from "./main.module.css";

const Main = ({ language }) => {
  return (
    <div className={classes.container}>
      <FilmList language={language} />
    </div>
  );
};

export default Main;
