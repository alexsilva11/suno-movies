import React, { FormEvent, useState } from 'react';
import { MdSearch, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { Nav, Search } from './styles';

import api from '../../services/api';

interface Movies {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: Array<number>;
  vote_average: number;
}

const NavBar: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Movies[]>([]);

  const api_key = process.env.REACT_APP_API_TOKEN;

  const onOpenSearch = () => {
    if (openSearch) {
      setOpenSearch(false);
      setSearch('');
      setResults([]);
    } else {
      setOpenSearch(true);
    }
  };

  const onSearchMovie = (evt: FormEvent) => {
    evt.preventDefault();

    api
      .get('/search/movie', {
        params: {
          api_key,
          language: 'pt-br',
          query: search,
        },
      })
      .then(res => setResults(res.data.results));
  };

  return (
    <>
      <Nav>
        <div>
          <div id="logo">
            SUNO <span>MOVIES</span>
          </div>
          <div id="options">
            <ul>
              <li>
                <Link to="/">INÍCIO</Link>
              </li>
              <li>
                <ScrollLink href="" to="catalogo" smooth duration={500}>
                  CATÁLOGO
                </ScrollLink>
              </li>
              <li>
                <button type="button" onClick={() => onOpenSearch()}>
                  <MdSearch size={20} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
      {openSearch && (
        <Search>
          <div className="search-area">
            <div className="container">
              <form onSubmit={onSearchMovie}>
                <input
                  type="text"
                  onChange={evt => {
                    setSearch(evt.target.value);
                  }}
                />
              </form>
              <div className="results">
                {results ? (
                  results.map(result => {
                    return (
                      <Link to={`/movie/${result.id}`} key={result.id}>
                        <div className="info">
                          <div className="img-container">
                            <img
                              src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                              alt="poster"
                            />
                          </div>
                          <div className="info-container">
                            <h3>{result.title}</h3>
                            <p>Drama, Comédia</p>
                            <span>
                              <MdStar color="#ff559f" /> {result.vote_average}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p>Não foram encontrados resultados</p>
                )}
              </div>
            </div>
          </div>
        </Search>
      )}
    </>
  );
};

export default NavBar;
