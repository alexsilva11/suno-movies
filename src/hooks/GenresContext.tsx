import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface Genre {
  id: number;
  name: string;
}

interface GenresContextData {
  genres: Genre[];
}

const GenresContext = createContext<GenresContextData>({} as GenresContextData);

export const GenresProvider: React.FC = ({ children }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const api_key = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    api
      .get('genre/movie/list', {
        params: {
          api_key,
          language: 'pt-br',
        },
      })
      .then(res => setGenres(res.data.genres));
  }, [api_key]);

  return (
    <GenresContext.Provider value={{ genres }}>
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = (): GenresContextData => {
  const context = useContext(GenresContext);

  if (!context) {
    throw new Error('useGenres must be used within a GenresProvider');
  }

  return context;
};
