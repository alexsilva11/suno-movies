import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieDetails from '../pages/MovieDetails';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={MovieDetails} />
    </BrowserRouter>
  );
};

export default Routes;
