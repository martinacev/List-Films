import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; 
import LanguageSwitch from './components/languages/LanguageSwitches';
import FilmList from './components/filmlist/FilmList'; 

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <ApolloProvider client={client}> 
      <div className="App">
        <header>
          <h1>Star Wars Films</h1>
          <LanguageSwitch onLanguageChange={handleLanguageChange} />
        </header>
        <FilmList language={language} /> 
      </div>
    </ApolloProvider>
  );
}

export default App;


