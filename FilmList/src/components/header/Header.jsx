import Languages from '../languages/Languages';
import classes from "./Header.module.css";

const Header = ({ onLanguageChange}) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Star Wars Films</h1>
      <Languages onLanguageChange={onLanguageChange} /> 
    </div>
  );
};


export default Header;
