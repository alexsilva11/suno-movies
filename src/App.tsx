import React from 'react';

import GlobalStyle from './styles/global';

import NavBar from './components/NavBar';

import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <NavBar />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
