import React from 'react';

const Languages = ({ onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className="language-switch">
      <label htmlFor="language">Choose Language: </label>
      <select id="language" onChange={handleChange}>
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

export default Languages;

