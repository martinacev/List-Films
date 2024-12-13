import React, { useState } from "react";
import classes from "./Languages.module.css";

const Languages = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div className={classes.container}>
      <button onClick={toggleLanguage} className={classes.toggleButton}>
        {language === "en" ? "DE" : "EN"}
      </button>
    </div>
  );
};

export default Languages;
