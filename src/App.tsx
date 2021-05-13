import React from 'react';

import GlobalStyle from './styles/global';

import NavBar from './components/NavBar';

import Home from './pages/Home';
// import FilmDetails from './pages/FilmDetails';

const App: React.FC = () => (
  <>
    <NavBar />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
