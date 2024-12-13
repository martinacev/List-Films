import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; 
import Header from './components/header/Header';
import Main from "./components/main/Main";



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
      <Header onLanguageChange={handleLanguageChange} />
      <Main language={language} />
      </div>
    </ApolloProvider>
  );
}

export default App;


